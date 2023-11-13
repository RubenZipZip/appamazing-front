
/*import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  products: any;

  constructor(
    private produtsService: ProductsService,
   private router:ActivatedRoute ) { }
   ngOnInit() {
    this.productsService.deleteProduct(this.route.snapshot.params['id']).subscribe(data =>{
      this.products =data
    )};
}
    
    deleteProduct() {
      const id = this.route.snapshot.params['id'];
  
      this.productsService.deleteProduct(id).subscribe(() => {
        
        this.router.navigate(['/products']); // Ajusta esto a tu ruta de lista de productos
      });
    
  }

}
*/