import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evaluation } from '../models/evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  
  apiUrl : string = "http://localhost:8095/evaluation"
  constructor(private http:HttpClient) { }
  
  getEvaluations() : Observable<evaluation[]>{
    return this.http.get<evaluation[]>(this.apiUrl +"");
  }

  addEvaluations(evaluation : evaluation) : Observable<evaluation>{
    return this.http.post<evaluation>(this.apiUrl +"/add" ,evaluation);
  }

  delete(id : number) : Observable<any>
  {
    return this.http.delete(this.apiUrl + "/"+id);
  }
}
