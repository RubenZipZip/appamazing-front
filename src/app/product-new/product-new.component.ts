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
    categories: []
   //    id_category: number;
  
  constructor(private categorieService: CategoriesService, private router: Router, private productsService: ProductsService) {}
    ngOnInit() {
      this.categorieService.getCategories().subscribe(data =>{
        this.categories=data;
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
  
  

