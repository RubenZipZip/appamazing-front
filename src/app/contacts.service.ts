import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
// conexion a postman
  constructor(private http:HttpClient) { }
// metodo de contactControler intellijJava
  getContacts(): Observable<any> {
    const url = 'http://localhost:30030/contacts/getAll'
    const headers = new HttpHeaders();
    // tipo any para recibir cualquier tipo dato, 
    return this.http.get<any>(url, {headers});
  }
}
