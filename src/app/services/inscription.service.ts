import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscriptionRequest } from '../models/inscription';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  
  apiUrl : string = "http://localhost:8055/inscription"
  constructor(private http:HttpClient) { }
  
  getInscriptions() : Observable<InscriptionRequest[]>{
    return this.http.get<InscriptionRequest[]>(this.apiUrl +"/all");
  }

  addInscription(event : InscriptionRequest) : Observable<InscriptionRequest>{
    return this.http.post<InscriptionRequest>(this.apiUrl +"/add" ,event);
  }
}
