import {NgModule} from '@angular/core';
import {routing} from './profile.routing';
import {SharedModule} from '../shared/shared.module';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {ProfileViewComponent} from './profile-view/profile-view.component';
import {PresentationEditComponent} from './presentation-edit/presentation-edit.component';
import {TagInputModule} from 'ngx-chips';
import {ProfileCompleteGuard} from './shared/profile-complete-guard.service';
import {IsAuthenticatedGuard} from './shared/is-authenticated-guard.service';
import {SpeakerSelectComponent} from './speaker-select/speaker.multiselect.component';
import {
  MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatSnackBarModule,
  MatTableModule, MatCheckboxModule, MatCardModule
} from '@angular/material';
import { CospeakersComponent } from './cospeakers/cospeakers.component';
import { ParticipationStatusComponent } from './participation-status/participation-status.component';
import { CommentsComponent } from './profile-view/comments/comments.component';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';


@NgModule({
  imports: [routing,
    SharedModule,
    TagInputModule,
    MatFormFieldModule,
    Ng2GoogleChartsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  declarations: [
    ProfileEditComponent,
    ProfileViewComponent,
    PresentationEditComponent,
    SpeakerSelectComponent,
    CospeakersComponent,
    ParticipationStatusComponent,
    CommentsComponent
  ],
  providers: [ProfileCompleteGuard, IsAuthenticatedGuard]

})
export class ProfileModule {

}
