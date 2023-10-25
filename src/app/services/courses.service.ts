import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  apiUrl : string = "http://localhost:8091/course"
  constructor(private http:HttpClient) { }
  
  getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl +"");
  }

  addCourse(course : Course) : Observable<Course>{
    return this.http.put<Course>(this.apiUrl +"/add" ,course);
  }
}
