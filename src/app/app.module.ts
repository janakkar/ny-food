import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {DropdownComponent} from "./common/dropdown.component";
import {ProductService} from "./domain/product.service";
import {Calculator} from "./calculator/calculator";
import {LoginComponent} from './login/login.component';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {routing} from "./app.routing";
import {CanActivateIfAuthenticatedGuard} from "./login/authentication.guard";
import { InputComponent } from './common/input.component';
import { ModalComponent } from './common/modal/modal.component';
import {IngredientService} from "./domain/ingredient.service";
import { ProductsComponent } from './product/products.component';
import { ProductGradeComponent } from './product/product-grade.component';
import { ProductListComponent } from './product/product-list.component';
import { BadgeComponent } from './common/badge.component';
import { AuthenticationService } from "./login/authentication.service";

export const firebaseConfig = {
    apiKey: "AIzaSyBWZy9gbtIO8bC4dSuhA1YCmAIwyy8XDcU",
    authDomain: "kyfood-d855c.firebaseapp.com",
    databaseURL: "https://kyfood-d855c.firebaseio.com",
    storageBucket: "kyfood-d855c.appspot.com",
    messagingSenderId: "787175316824"
};

const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        DropdownComponent,
        CalculatorComponent,
        LoginComponent,
        InputComponent,
        ModalComponent,
        ProductsComponent,
        ProductGradeComponent,
        ProductListComponent,
        BadgeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
    ],
    providers: [AuthenticationService, ProductService, IngredientService, Calculator, CanActivateIfAuthenticatedGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
