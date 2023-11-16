import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
// entrega cualquier valor <any>
  getProducts(): Observable<any> {
    const url = 'http://localhost:30030/products/getAll'
    const headers = new HttpHeaders();
    // headers referente a la direccion postman de la peticion
    return this.http.get<any>(url, {headers});
}
getProduct(p_id: number): Observable<any>{
  const url = 'http://localhost:30030/products/get';
  const headers =new HttpHeaders().set('Content-Type', 'application/json'); 
  /*creo el objeto HttHeaders y le paso parametros
  necesitamos desde el header decirle que tipo de dato vamos a recibir Content-type, application/json
   pasamos el JSON del body pq es peticion PostMapping en Java que tiene como clave un id
   en content-type del Postman nos indica que es un JSON, VALOR PARAMETRO:CLAVE id: c_id
   monta el body tal y como espera recibirlo, es post pq le paso el id del contacto en el body 
   */
   const body = JSON.stringify ({id: p_id});
  return this.http.post(url, body,{headers}); //llama al back no al postman, post pq esta asi en el Controller de java) llama al metodo de back con la url que retorna el body

}
newProduct(product: any): void{
  const url = 'http://localhost:30030/products/add';
  const headers =new HttpHeaders().set('Content-Type', 'application/json');
  const body = product;
  this.http.post(url, body, {headers}).subscribe(); // no se pone data pq no devuelve dato
}



updateProduct(product: any): void{
  const url = 'http://localhost:30030/products/update';
  const headers =new HttpHeaders().set('Content-Type', 'application/json');
  const body = product;
  this.http.put(url, body, {headers}).subscribe();

}
}
