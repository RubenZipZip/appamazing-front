import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../model/Products';
import { Category } from '../model/Category';

  
  @Component ({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.css']

  })
  export class ProductNewComponent implements OnInit {
    product: Product = new Product();

    category : Category = new Category();
   //    id_category: number;
  
  constructor(private router: Router, private productsService: ProductsService) {}
    ngOnInit() {
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
  
  

