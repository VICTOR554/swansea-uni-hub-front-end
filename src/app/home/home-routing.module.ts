import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'main-menu',
        children: [
          {
            path: '',
            loadChildren: () => import('./main-menu/main-menu.module').then((m) => m.MainMenuPageModule),
          },
          {
            path: 'student-information',
            // eslint-disable-next-line max-len
            loadChildren: () => import('./main-menu/student-information/student-information.module').then( m => m.StudentInformationPageModule)
          },
          {
            path: 'submission-deadline',
            // eslint-disable-next-line max-len
            loadChildren: () => import('./main-menu/submission-deadline/submission-deadline.module').then( m => m.SubmissionDeadlinePageModule)
          },
          {
            path: 'library',
            loadChildren: () => import('./main-menu/library/library.module').then( m => m.LibraryPageModule)
          },
          {
            path: 'maps',
            loadChildren: () => import('./main-menu/maps/maps.module').then( m => m.MapsPageModule)
          },
          {
            path: 'booking',
            loadChildren: () => import('./main-menu/booking/booking.module').then( m => m.BookingPageModule)
          },
          {
            path: 'student-union',
            loadChildren: () => import('./main-menu/student-union/student-union.module').then( m => m.StudentUnionPageModule)
          },
          {
            path: 'event',
            loadChildren: () => import('./main-menu/event/event.module').then( m => m.EventPageModule)
          },
          {
            path: 'key-contact',
            loadChildren: () => import('./main-menu/key-contact/key-contact.module').then( m => m.KeyContactPageModule)
          },
          {
            path: 'report',
            loadChildren: () => import('./main-menu/report/report.module').then( m => m.ReportPageModule)
          }
        ]

      },
      {
        path: 'timetable',
        loadChildren: () => import('./timetable/timetable.module').then(m => m.TimetablePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule)
      },
      // makes the path return to  main menu when path is null
      {
        path: '',
        redirectTo: '/home/tabs/main-menu',
        pathMatch: 'full',
      },
    ],
  },
  // makes the path return to  main menu when path is null
  {
    path: '',
    redirectTo: '/home/tabs/main-menu',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
