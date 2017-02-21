import {Component, OnInit} from '@angular/core';
import {ProductService} from "./domain/product.service";

@Component({
    selector: '[kyf-header]',
    template: `
    <h1>
      Know-Your-Food
    </h1>
  `,
    styles: []
})
export class HeaderComponent implements OnInit{

    private productTypes: string[];

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.productTypes = this.productService.getProductTypes();
    }

    onSelect(item: string) {

    }
}
