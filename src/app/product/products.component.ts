import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../domain/product";
import {ProductService} from "../domain/product.service";
import {Observable} from "rxjs";

@Component({
    selector: '[kyf-products]',
    template: `
      <div kyf-product-list 
           [title]="'Products'" 
           [products]="products | async">
      </div>`,
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    @Input()
    private products: Observable<Product[]>;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.findAllProducts();
    }
}
