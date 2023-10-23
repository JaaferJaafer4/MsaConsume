import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  apiUrl : string = "http://localhost:8090/user"
  constructor(private http:HttpClient) { }
  
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

}
