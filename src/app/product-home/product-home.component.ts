import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ContactDeleteComponent } from '../contact-delete/contact-delete.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit  {
  products: any = [] ;
   // creamos constructor para llamar el servicio

  constructor(private produtsService: ProductsService, private router: Router, public dialog : MatDialog){}

// lo que se meta en el noOnit lo carga antes del html para que la tabla no salga vacia
 ngOnInit(): void {
  this.produtsService.getProducts().subscribe(data =>{
    this.products = data   
    
    })

  
   
 } 

 openDetailForm(row: any){
  // metodo navigate la ruta del formulario+campo que clickcamos
  this.router.navigate(['/product', row.id]);
  // tiene que enrutar a product detail , vamos al constructor y añadimos private router:Router

 }
 editProductDetail( contact: any){
  this.router.navigate(['/product/edit', contact])
 }

 openDeleteDialog(productId: number) :void{
  this.dialog.open(ProductDeleteComponent, {data:{productId: productId}})
 }
 
 displayedColumns: string[] = ['id', 'name', 'stock', 'price', 'active', 'date_added', 'category', 'actions'];
  
  
  }

