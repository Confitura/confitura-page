import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PersonModalService} from '../person-modal/person-modal.service';
import {User} from '../../core/user/user.model';

@Component({
  selector: 'cf-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input()
  model: User;
  @ViewChild('img')
  imgElement: ElementRef;

  constructor(private modalService: PersonModalService) {

  }


  showDefaultPhoto() {
    const element = this.imgElement.nativeElement;
    console.log($(element).get(0).onerror);
    // this.imgElement.error = null;
    // element.className +=" empty";
    // element.src = null;
  }

  openModal() {
    this.modalService.showFor(this.model);
  }

  firstName(): string {
    return this.model.name.split(' ')[0];
  }

  lastName(): string {
    return this.model.name.replace(this.firstName(), '').trim();
  }
}
