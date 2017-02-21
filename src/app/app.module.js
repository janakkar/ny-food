"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header.component');
var calculator_component_1 = require('./calculator/calculator.component');
var dropdown_component_1 = require("./common/dropdown.component");
var product_service_1 = require("./domain/product.service");
var calculator_1 = require("./calculator/calculator");
var login_component_1 = require('./login/login.component');
var angularfire2_1 = require("angularfire2");
var app_routing_1 = require("./app.routing");
var authentication_guard_1 = require("./login/authentication.guard");
var input_component_1 = require('./common/input.component');
var modal_component_1 = require('./common/modal/modal.component');
var ingredient_service_1 = require("./domain/ingredient.service");
exports.firebaseConfig = {
    apiKey: "AIzaSyBWZy9gbtIO8bC4dSuhA1YCmAIwyy8XDcU",
    authDomain: "kyfood-d855c.firebaseapp.com",
    databaseURL: "https://kyfood-d855c.firebaseio.com",
    storageBucket: "kyfood-d855c.appspot.com",
    messagingSenderId: "787175316824"
};
var myFirebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Password,
    method: angularfire2_1.AuthMethods.Password
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                dropdown_component_1.DropdownComponent,
                calculator_component_1.CalculatorComponent,
                login_component_1.LoginComponent,
                input_component_1.InputComponent,
                modal_component_1.ModalComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig, myFirebaseAuthConfig)
            ],
            providers: [product_service_1.ProductService, ingredient_service_1.IngredientService, calculator_1.Calculator, authentication_guard_1.CanActivateIfAuthenticatedGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
