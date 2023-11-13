import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
getCategories(cat_id): Observable<any> {
  const url ='http://localhost:30030/categories/getAll';
  const headers =new HttpHeaders().set('Content-Type', 'application/json'); 
  const body = JSON.stringify ({id: cat_id}); // monta el body tal y como espera recibirlo
  // es post pq le paso el id del contacto en el body  
  return this.http.post(url, body,{headers}); //(llama al back no al postman, post pq esta asi en el Controller de java) llama al metodo de back con la url que retorna el body
}

}
  

