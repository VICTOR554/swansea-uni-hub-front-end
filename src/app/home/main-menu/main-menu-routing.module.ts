import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuPage } from './main-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPage
  },
  {
    path: 'student-information',
    loadChildren: () => import('./student-information/student-information.module').then( m => m.StudentInformationPageModule)
  },
  {
    path: 'submission-deadline',
    loadChildren: () => import('./submission-deadline/submission-deadline.module').then( m => m.SubmissionDeadlinePageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'student-union',
    loadChildren: () => import('./student-union/student-union.module').then( m => m.StudentUnionPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'key-contact',
    loadChildren: () => import('./key-contact/key-contact.module').then( m => m.KeyContactPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuPageRoutingModule {}
