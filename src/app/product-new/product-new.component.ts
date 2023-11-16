import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../model/Products';
import { Category } from '../model/Category';
import { CategoriesService } from '../categories.service';

  
  @Component ({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.css']

  })
  export class ProductNewComponent implements OnInit {
    product: Product = new Product();

    category : Category = new Category();
    categories: [] // le indicamos que va a recibir un array vacio
   
  //LLAMA AL SERVICIO->OBTIENE DATOS->LO ASIGNA A UN COMPONENTE

   //le envio el servicio categorieService que tengo en el .ts, categories/getAll. Despues iremos al forumlario a meter un campo para este dato categories/getAll
  constructor(private categorieService: CategoriesService, private router: Router, private productsService: ProductsService) {}
    ngOnInit() {

      //recoge el metodo getCategories que creamos en el categogies.service.ts
      // susbscribe es una libreria usada en Angular para asincornos y flujo de datos
      //la funcion flecha se ejecuta cuando el observable emite un valor (los datos de categorias)
      this.categorieService.getCategories().subscribe(data =>{
        this.categories=data; // guarda los valores recinidos en data dentro de categories
      })
       }


    newProduct(){
      const product = {
        name: this.product.name,
        stock: this.product.stock,
        price: this.product.price,
        active:  this.product.active,
        date_added: this.product.date_added,
        categories: this.category

      }

      this.productsService.newProduct(product);
      this.navigateToHome();
    }
  
  navigateToHome(){
    this.router.navigate(['/products']);
  }
  cancelInsert(){
    this.navigateToHome();
  }
  
  }
  
  

