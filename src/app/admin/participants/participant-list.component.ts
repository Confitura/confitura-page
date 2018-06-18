import {Component, OnInit, ViewChild} from '@angular/core';
import {ParticipantService} from './participant.service';
import {Participant} from './participant.model';
import {FileUploader} from 'ng2-file-upload';
import {CurrentUser} from '../../core/security/current-user.service';
import {ConfirmationService} from '../../core/confirmation.service';
import {environment} from '../../../environments/environment';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  templateUrl: './participant-list.component.html'
})
export class ParticipantListComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = [
    'id',
    'name',
    'email',
    'gender',
    'size',
    'arrivalDate',
    'registeredBy',
    'ticketSendDate',
    'surveySendDate',
    'isAdmin',
    'isVolunteer',
    'isSpeaker',
    'hasAcceptedPresentation',
    'isParticipant',
  ];
  dataSource: MatTableDataSource<Participant>;

  list: Participant[] = [];
  uploader: FileUploader;
  uploadResponse;

  constructor(private service: ParticipantService,
              private user: CurrentUser,
              private confirmation: ConfirmationService) {
    this.dataSource = new MatTableDataSource(this.list);
  }

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.service.getAll()
      .subscribe(list => {
        this.dataSource.data = list;
        this.list = list;
      });

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  sendTickets() {
    this.confirmation.show('you want to send tickets to participants which haven\'t received  one yet?')
      .then(() => this.service.sendTickets().subscribe());
  }

  sendSurveys() {
    this.confirmation.show('you want to send surveys to all attendees?')
      .then(() => this.service.sendSurveys().subscribe());
  }

  private showResponse(responseString: string) {
    this.uploadResponse = JSON.parse(responseString);
  }
}
