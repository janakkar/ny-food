"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ingredient_1 = require("../domain/ingredient");
var modal_component_1 = require("../common/modal/modal.component");
var CalculatorComponent = (function () {
    function CalculatorComponent(fb, productService, calculator, ingredientService) {
        this.fb = fb;
        this.productService = productService;
        this.calculator = calculator;
        this.ingredientService = ingredientService;
        this.grades = ['A', 'B', 'C', 'D', 'E'];
        this.metadata = ingredientService.getMetadata();
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productTypes = this.productService.getProductTypes();
        this.productForm = this.fb.group({
            name: '',
            productType: 'Dairy',
            badIngredients: this.fb.array([
                this.fb.group({ type: ingredient_1.BadIngredient.Calories, amount: 0 }),
                this.fb.group({ type: ingredient_1.BadIngredient.SaturatedFats, amount: 0 }),
                this.fb.group({ type: ingredient_1.BadIngredient.SimpleSugars, amount: 0 }),
                this.fb.group({ type: ingredient_1.BadIngredient.Salt, amount: 0 })
            ]),
            goodIngredients: this.fb.array([
                this.fb.group({ type: ingredient_1.GoodIngredient.Fibre, amount: 0 }),
                this.fb.group({ type: ingredient_1.GoodIngredient.Protein, amount: 0 }),
                this.fb.group({ type: ingredient_1.GoodIngredient.Natural, amount: 0 })
            ])
        });
        this.productForm.valueChanges.subscribe(function (value) {
            if (value && value.goodIngredients && value.badIngredients) {
                _this.calculate({ value: value, valid: true });
            }
        });
        this.productForm.controls['name'].valueChanges.subscribe(function (value) {
            _this.productService.findProductByName(value).subscribe(function (products) {
                if (products && products.length > 0) {
                    var productFound = {
                        name: products[0].name,
                        productType: products[0].productType,
                        badIngredients: products[0].badIngredients,
                        goodIngredients: products[0].goodIngredients
                    };
                    _this.productForm.setValue(productFound, { emitEvent: false });
                    _this.calculate({ value: productFound, valid: true });
                }
            });
        });
    };
    CalculatorComponent.prototype.getBadIngredients = function () {
        return Object.keys(ingredient_1.BadIngredient).map(function (n) { return ingredient_1.BadIngredient[n]; });
    };
    CalculatorComponent.prototype.getGoodIngredients = function () {
        return Object.keys(ingredient_1.GoodIngredient).map(function (n) { return ingredient_1.GoodIngredient[n]; });
    };
    CalculatorComponent.prototype.calculate = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.product = value;
        console.log(this.product);
        this.calculation = this.calculator.calculate(this.product);
        this.grade = this.calculator.assignGrade(this.calculation);
    };
    CalculatorComponent.prototype.onSave = function () {
        this.productService.addProduct(this.product);
    };
    CalculatorComponent.prototype.showCalculation = function () {
        return this.calculation !== undefined;
    };
    CalculatorComponent.prototype.isActive = function (grade) {
        return this.calculation !== undefined && this.grade === grade;
    };
    CalculatorComponent.prototype.openModal = function () {
        this.modal.open();
    };
    CalculatorComponent.prototype.closeModal = function () {
        console.log("test");
        this.modal.close();
    };
    __decorate([
        core_1.ViewChild(modal_component_1.ModalComponent)
    ], CalculatorComponent.prototype, "modal", void 0);
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: '[kyf-calculator]',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.css']
        })
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
