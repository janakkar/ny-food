import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../domain/product";

@Component({
  selector: '[kyf-product-grade]',
  templateUrl: './product-grade.component.html',
  styleUrls: ['./product-grade.component.css']
})
export class ProductGradeComponent implements OnInit {

  @Input()
  private product: Product;
  @Input()
  private grade: string;

  constructor() { }

  ngOnInit() {
  }

}
