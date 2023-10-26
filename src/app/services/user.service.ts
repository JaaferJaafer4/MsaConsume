import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from '../models/authenticationrequest';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  apiUrl : string = "http://localhost:8090/user"
  constructor(private http:HttpClient) { }
  
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user : User) : Observable<User>{
    return this.http.put<User>(this.apiUrl +"/add",user);
  }

  authenticate(auth : AuthenticationRequest) : Observable<boolean>{
    return this.http.post<boolean>(this.apiUrl + "/authenticate",auth)
  }

  delete(id : number) : Observable<any>
  {
    return this.http.delete(this.apiUrl + "/"+id);
  }
}
