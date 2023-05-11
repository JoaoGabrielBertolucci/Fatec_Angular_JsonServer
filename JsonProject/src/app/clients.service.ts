import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clients } from './client';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url = "http://localhost:3000/clients";

  constructor(private http : HttpClient) { }

  getClients(): Observable<clients[]>{
    let url = "http://localhost:3000/clients";
    return this.http.get<clients[]>(url);
    return this.http.get<clients[]>(this.url);
  }

  save(client : clients): Observable<clients>{
    return this.http.post<clients>(this.url, client);
  }
}