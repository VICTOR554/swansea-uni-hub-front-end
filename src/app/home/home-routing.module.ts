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
            loadChildren: () => import('./main-menu/student-information/student-information.module').then(m => m.StudentInformationPageModule)
          },
          {
            path: 'coursework-deadline',
            // eslint-disable-next-line max-len
            loadChildren: () => import('./main-menu/coursework-deadline/coursework-deadline.module').then(m => m.CourseworkDeadlinePageModule)
          },
          {
            path: 'library',
            loadChildren: () => import('./main-menu/library/library.module').then(m => m.LibraryPageModule)
          },
          {
            path: 'maps',
            loadChildren: () => import('./main-menu/maps/maps.module').then(m => m.MapsPageModule)
          },
          {
            path: 'booking',
            children: [
              {
                path: '',
                loadChildren: () => import('./main-menu/booking/booking.module').then(m => m.BookingPageModule)
              },
              {
                path: 'new',
                loadChildren: () => import('./main-menu/booking/new-booking/new-booking.module').then( m => m.NewBookingPageModule)
              },
              {
                path: 'edit/:bookingId',
                loadChildren: () => import('./main-menu/booking/edit-booking/edit-booking.module').then( m => m.EditBookingPageModule)
              },
            ]
          },
          {
            path: 'student-union',
            loadChildren: () => import('./main-menu/student-union/student-union.module').then(m => m.StudentUnionPageModule)
          },
          {
            path: 'event',
            loadChildren: () => import('./main-menu/event/event.module').then(m => m.EventPageModule)
          },
          {
            path: 'contact',
            loadChildren: () => import('./main-menu/contact/contact.module').then(m => m.ContactPageModule)
          },
          {
            path: 'report',
            children: [
              {
                path: '',
                loadChildren: () => import('./main-menu/report/report.module').then(m => m.ReportPageModule)
              },
              {
                path: 'new',
                loadChildren: () => import('./main-menu/report/new-report/new-report.module').then(m => m.NewReportPageModule)
              }
            ]
          },
        ]

      },
      {
        path: 'timetable',
        children: [
          {
            path: '',
            loadChildren: () => import('./timetable/list-view/list-view.module').then(m => m.ListViewPageModule)
          },
          {
            path: 'grid-view',
            loadChildren: () => import('./timetable/grid-view/grid-view.module').then(m => m.GridViewPageModule)
          }
        ]
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'notes',
        children: [
          {
            path: '',
            loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./notes/new-notes/new-notes.module').then(m => m.NewNotesPageModule)
          },
          {
            path: 'edit/:noteId',
            loadChildren: () => import('./notes/edit-notes/edit-notes.module').then(m => m.EditNotesPageModule)
          }
        ]
      },
      {
        path: 'tasks',
        children: [
          {
            path: '',
            loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./tasks/new-tasks/new-tasks.module').then(m => m.NewTasksPageModule)
          },
          {
            path: 'edit/:taskId',
            loadChildren: () => import('./tasks/edit-tasks/edit-tasks.module').then(m => m.EditTasksPageModule)
          },
        ]
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
