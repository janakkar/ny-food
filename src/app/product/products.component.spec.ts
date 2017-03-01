/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By, BrowserModule} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductsComponent } from './products.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "../domain/product.service";
import {BadgeComponent} from "../common/badge.component";
import {ProductListComponent} from "./product-list.component";
import {ProductGradeComponent} from "./product-grade.component";
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../app.module";
import {Calculator} from "../calculator/calculator";

describe('ProductsComponent', () => {
    let component: ProductsComponent;
    let fixture: ComponentFixture<ProductsComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ ProductGradeComponent, ProductListComponent, BadgeComponent, ProductsComponent ],
          imports: [ FormsModule, AngularFireModule.initializeApp(firebaseConfig) ],
          providers: [ Calculator, ProductService ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ProductsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
});
