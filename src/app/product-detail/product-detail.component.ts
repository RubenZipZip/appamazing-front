import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Contact } from '../model/Contact';
import { ContactDeleteComponent } from '../contact-delete/contact-delete.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: any;
  
  // creamos constructor para llamar al servicio o a los servicios que queremos coger de los .ts
  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router : Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(data =>{
      this.products =data
    })
  }

    editProduct(){
      this.router.navigate(['/product/edit', this.route.snapshot.params['id']]);
    }
  
    closeProduct(){
      this.router.navigate(['/products']);
    }
    openDeleteDialog(productId: number): void{
      this.dialog.open(ProductDeleteComponent, {data:{ productId: productId}})

    }
  }
  


  





