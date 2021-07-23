import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: '',
    component: TasksPage
  },
  {
    path: 'new-tasks',
    loadChildren: () => import('./new-tasks/new-tasks.module').then( m => m.NewTasksPageModule)
  },
  {
    path: 'edit-tasks',
    loadChildren: () => import('./edit-tasks/edit-tasks.module').then( m => m.EditTasksPageModule)
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
