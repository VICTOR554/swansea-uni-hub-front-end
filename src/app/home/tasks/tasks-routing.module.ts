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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
