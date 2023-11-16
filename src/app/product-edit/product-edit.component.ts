import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any

  categories: []

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router, private categoryService : CategoriesService)  { }

  ngOnInit() {

    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data =>{
      this.product =data;
    })
    this.categoryService.getCategories().subscribe(data =>{
      this.categories=data; // guarda los valores recinidos en data dentro de categories
    })
  }
  
updateProduct(){
  this.productService.updateProduct(this.product);
  this.navigateDetail();
}

cancelUpdate(){
  this.navigateDetail()
}


  navigateDetail() {
    this.router.navigate(['/product', this.route.snapshot.params['id']]);
  }
}
