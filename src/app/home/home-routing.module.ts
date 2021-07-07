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
        loadChildren: () =>import('./main-menu/main-menu.module').then((m) => m.MainMenuPageModule),
      },
      {
        path: 'timetable',
        loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule)
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
export class HomePageRoutingModule {}
