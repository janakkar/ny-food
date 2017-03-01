import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../domain/product";
import {Calculator} from "../calculator/calculator";

@Component({
    selector: '[kyf-product-list]',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    @Input()
    private products: Product[];
    @Input()
    private title: String;

    constructor(private calculator: Calculator) {
    }

    ngOnInit() {

    }

    calculateGrade(product: Product) {
        if (product)
            return this.calculator.assignGrade(this.calculator.calculate(product));
    }

}
