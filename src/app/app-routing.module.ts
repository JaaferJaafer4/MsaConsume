import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { CalendarsComponent } from './components/calendars/calendars.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'inscriptions',component:InscriptionsComponent},
  {path:'calendars',component:CalendarsComponent},
  {path:'evaluations',component:EvaluationsComponent},
  {path:'courses',component:CoursesComponent},
  {path:'users',component:UsersComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
