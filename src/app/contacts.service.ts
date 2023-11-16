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

  getContact(c_id: number): Observable<any>{
    const url = 'http://localhost:30030/contacts/get';
    const headers =new HttpHeaders().set('Content-Type', 'application/json'); //creo el objeto HttHeaders y le paso parametros
    // necesitamos desde el header decirle que tipo de dato vamos a recibir Content-type, application/json
    // pasamos el JSON del body pq es peticion PostMapping en Java que tiene como clave un id
    // en content-type del Postman nos indica que es un JSON, VALOR PARAMETRO:CLAVE id: c_id
    const body = JSON.stringify ({id: c_id}); // monta el body tal y como espera recibirlo
    // es post pq le paso el id del contacto en el body  
    return this.http.post(url, body,{headers}); //(llama al back no al postman, post pq esta asi en el Controller de java) llama al metodo de back con la url que retorna el body
  }

  newContact(contact: any): void{
    const url = 'http://localhost:30030/contacts/add';
    const headers =new HttpHeaders().set('Content-Type', 'application/json');
    const body = contact;
    this.http.post(url, body, {headers}).subscribe(); // no se pone data pq no devuelve dato
  }
  updateContact(contact: any): void{
    const url = 'http://localhost:30030/contacts/update';
    const headers =new HttpHeaders().set('Content-Type', 'application/json');
    const body = contact;
    this.http.put(url, body, {headers}).subscribe();
  }


  deleteContact(contactId: number): void{
    const url = 'http://localhost:30030/contacts/delete';
    const body = { id: contactId};
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
      
      this.http.delete(url, options).subscribe();

    }
}

