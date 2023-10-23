import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { CalendarsComponent } from './components/calendars/calendars.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'inscriptions',component:InscriptionsComponent},
  {path:'calendars',component:CalendarsComponent},
  {path:'evaluations',component:EvaluationsComponent},
  {path:'courses',component:CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
