import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../../core/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class PersonModalService {
  changed: EventEmitter<User> = new EventEmitter<User>();

  showFor(user: User) {
    this.changed.emit(user);
  }

  close() {
    this.changed.emit(null);
  }
}
