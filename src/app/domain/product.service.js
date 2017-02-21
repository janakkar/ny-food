"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProductService = (function () {
    function ProductService(af) {
        this.af = af;
    }
    ProductService.prototype.getProductTypes = function () {
        return ['Dairy', 'Cookies', 'Beverage'];
    };
    ProductService.prototype.addProduct = function (product) {
        var products = this.af.database.list('/products');
        products.push(product);
    };
    ProductService.prototype.findProductByName = function (name) {
        var subject = new rxjs_1.Subject();
        var products = this.af.database.list('/products', {
            query: {
                orderByhild: 'name',
                equalTo: name
            }
        }).subscribe(function (item) {
            subject.next(item);
        });
        return subject.first();
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
