import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './components/tasks/tasks.component';
import { OtherPathComponent } from './components/other-path/other-path.component';

const faRoutes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'otherPath', component: OtherPathComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(faRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
