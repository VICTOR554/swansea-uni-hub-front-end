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
            path: 'submission-deadline',
            // eslint-disable-next-line max-len
            loadChildren: () => import('./main-menu/submission-deadline/submission-deadline.module').then(m => m.SubmissionDeadlinePageModule)
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
            loadChildren: () => import('./main-menu/booking/booking.module').then(m => m.BookingPageModule)
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
            path: 'key-contact',
            loadChildren: () => import('./main-menu/key-contact/key-contact.module').then(m => m.KeyContactPageModule)
          },
          {
            path: 'report',
            loadChildren: () => import('./main-menu/report/report.module').then(m => m.ReportPageModule)
          }
        ]

      },
      {
        path: 'timetable',
        children: [
          {
            path: '',
            loadChildren: () => import('./timetable/timetable.module').then(m => m.TimetablePageModule)
          },
          {
            path: 'list-view',
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
            loadChildren: () => import('./tasks/new-tasks/new-tasks.module').then( m => m.NewTasksPageModule)
          },
          {
            path: 'edit/:taskId',
            loadChildren: () => import('./tasks/edit-tasks/edit-tasks.module').then( m => m.EditTasksPageModule)
          },
          {
            path: 'in-progress-tasks',
            loadChildren: () => import('./tasks/in-progress-tasks/in-progress-tasks.module').then( m => m.InProgressTasksPageModule)
          },
          {
            path: 'completed-tasks',
            loadChildren: () => import('./tasks/completed-tasks/completed-tasks.module').then( m => m.CompletedTasksPageModule)
          },
          {
            path: 'overdue-tasks',
            loadChildren: () => import('./tasks/overdue-tasks/overdue-tasks.module').then( m => m.OverdueTasksPageModule)
          },
          {
            path: 'flagged-tasks',
            loadChildren: () => import('./tasks/flagged-tasks/flagged-tasks.module').then( m => m.FlaggedTasksPageModule)
          }
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
