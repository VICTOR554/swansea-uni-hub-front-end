import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: '',
    component: TasksPage,
    children: [
      {
        path: 'in-progress-tasks',
        loadChildren: () => import('./in-progress-tasks/in-progress-tasks.module').then( m => m.InProgressTasksPageModule)
      },
      {
        path: 'completed-tasks',
        loadChildren: () => import('./completed-tasks/completed-tasks.module').then( m => m.CompletedTasksPageModule)
      },
      {
        path: 'overdue-tasks',
        loadChildren: () => import('./overdue-tasks/overdue-tasks.module').then( m => m.OverdueTasksPageModule)
      },
      {
        path: 'flagged-tasks',
        loadChildren: () => import('./flagged-tasks/flagged-tasks.module').then( m => m.FlaggedTasksPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
