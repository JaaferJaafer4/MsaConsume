import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  
  apiUrl : string = "http://localhost:8092/calendar"
  constructor(private http:HttpClient) { }
  
  getCalendars() : Observable<Event[]>{
    return this.http.get<Event[]>(this.apiUrl);
  }

  addCalendar(event : Event) : Observable<Event>{
    return this.http.put<Event>(this.apiUrl +"/add" ,event);
  }

  delete(id : number) : Observable<any>
  {
    return this.http.delete(this.apiUrl + "/"+id);
  }
}
