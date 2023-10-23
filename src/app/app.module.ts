import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './components/users/users.component';
import { CalendarsComponent } from './components/calendars/calendars.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CalendarsComponent,
    EvaluationsComponent,
    InscriptionsComponent,
    CoursesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
