import {Component, ViewChild} from '@angular/core';
import {Participant, Voucher} from '../../../admin/participants/participant.model';
import {ParticipantService} from '../../../admin/participants/participant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';

@Component({templateUrl: './registration-form.component.html', styleUrls: ['./registration-form.component.css']})
export class RegistrationFormComponent {
  submitted = false;
  error: string;

  private registrationForm: FormGroup;

  constructor(private service: ParticipantService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      voucher: [null],
      city: [null, Validators.required],
      sex: [null, Validators.required],
      size: [null, Validators.required],
      experience: [null, Validators.required],
      role: [null, Validators.required]
    });

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
          this.registrationForm.setValue({
            voucher: participant.voucher.id,
            city: participant.city,
            sex: participant.gender,
            size: participant.size,
            experience: participant.experience,
            role: participant.role
          });
        });
    } else {
      this.registrationForm.get('voucher').setValue(voucher);
    }

  }

  save() {
    this.submitted = true;
    if (this.registrationForm.valid) {

      const model = new Participant(this.registrationForm.value);
      if (this.registrationForm.value.voucher) {
        model.voucher = new Voucher({id: this.registrationForm.value.voucher});
      }
      this.service.save(model)
        .pipe(
          catchError(error => {
            if (error.error === 'INVALID_VOUCHER') {
              this.error = 'Voucher you provided is invalid';
            } else {
              this.error = 'Something went wrong. Please try again or contact us at confitura@confitura.pl';
            }
            return Observable.throwError(error);
          })
        )
        .subscribe(() => this.router.navigate(['/registration/finish']));
    }
  }


  get voucher() {
    return this.registrationForm.get('voucher');
  }

  get city() {
    return this.registrationForm.get('city');
  }

  get sex() {
    return this.registrationForm.get('sex');
  }

  get size() {
    return this.registrationForm.get('size');
  }

  get experience() {
    return this.registrationForm.get('experience');
  }

  get role() {
    return this.registrationForm.get('role');
  }
}
