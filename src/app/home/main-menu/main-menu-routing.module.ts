import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainMenuPage } from './main-menu.page';

const routes: Routes = [
  {
    path: '',
    component: MainMenuPage,
  },
  {
    path: 'student-information',
    loadChildren: () => import('./student-information/student-information.module').then( m => m.StudentInformationPageModule)
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
    children:
    [
      {
        path: '',
        loadChildren: () => import('./booking/booking.module').then(m => m.BookingPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./booking/new-booking/new-booking.module').then(m => m.NewBookingPageModule)
      },
      {
        path: 'edit/:bookingId',
        loadChildren: () => import('./booking/edit-booking/edit-booking.module').then(m => m.EditBookingPageModule)
      },
    ]
  },
  {
    path: 'student-union',
    children: [
      {
        path: '',
        loadChildren: () => import('./student-union/student-union.module').then(m => m.StudentUnionPageModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./student-union/event/event.module').then(m => m.EventPageModule)
      },
      {
        path: 'societies',
        loadChildren: () => import('./student-union/societies/societies.module').then(m => m.SocietiesPageModule)
      },
      {
        path: 'sports',
        loadChildren: () => import('./student-union/sports/sports.module').then(m => m.SportsPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./student-union/about-us/about-us.module').then(m => m.AboutUsPageModule)
      },
    ]
  },
  {
    path: 'report',
    children: [
      {
        path: '',
        loadChildren: () => import('./report/report.module').then(m => m.ReportPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./report/new-report/new-report.module').then(m => m.NewReportPageModule)
      }
    ]
  },
  {
    path: 'coursework-deadline',
    loadChildren: () => import('./coursework-deadline/coursework-deadline.module').then( m => m.CourseworkDeadlinePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainMenuPageRoutingModule {}
