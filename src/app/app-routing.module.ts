import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PartnersComponent} from './pages/partners/partner-list/partners.component';
import {AboutComponent} from './pages/about/about.component';
import {AgendaComponent} from './pages/agenda/agenda.component';
import {PartnerComponent} from './pages/partners/partner/partner.component';
import {PresentationListComponent} from './pages/presentations/presentation-list/presentation-list.component';
import {SpeakerListComponent} from './pages/speakers/speaker-list.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';


const appRoutes: Routes = [

  {
    path: 'admin2',
    loadChildren: 'app/admin/admin.module#AdminModule',
  },
  {
    path: 'v4p',
    loadChildren: 'app/pages/v4p/v4p.module#V4pModule',
  },
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'presentations', component: PresentationListComponent},
  {path: 'speakers', component: SpeakerListComponent},
  {path: 'schedule', component: AgendaComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'partners/:id', component: PartnerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:origin', component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}