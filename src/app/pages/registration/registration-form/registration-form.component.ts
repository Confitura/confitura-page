import {Component, ViewChild} from '@angular/core';
import {Participant, Voucher} from '../../../admin/participants/participant.model';
import {ParticipantService} from '../../../admin/participants/participant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

@Component({templateUrl: './registration-form.component.html'})
export class RegistrationFormComponent {
  submitted = false;
  error: string;
  model: Participant;
  @ViewChild('registrationForm') form: FormControl;


  constructor(private service: ParticipantService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.params['id'];
    const voucher = this.route.snapshot.params['voucher'];
    if (id) {
      this.service.getOne(id)
        .pipe(
          catchError(error => {
            this.error = 'Something went wrong or your token is incorrect.' +
              ' Please try again or contact us at confitura@confitura.pl';
            return Observable.throwError(error);
          })
        )
        .subscribe(participant => {
          this.model = participant;
          if (voucher || !participant.voucher) {
            participant.voucher = new Voucher({id: voucher});
          }
        });
    } else {
      this.model = new Participant();
      this.model.voucher.id = voucher;
    }

  }

  save() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.save(this.model)
        .pipe(
          catchError(error => {
            this.error = 'Something went wrong. Please try again or contact us at confitura@confitura.pl';
            return Observable.throwError(error);
          })
        )
        .subscribe(() => this.router.navigate(['/registration/finish']));
    }
  }
}
