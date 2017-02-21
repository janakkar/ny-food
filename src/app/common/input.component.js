"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var InputComponent = (function () {
    function InputComponent() {
        this.propagateChange = function (_) {
        };
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.onChange = function (newValue) {
        this.amount = newValue;
        this.propagateChange(this.amount);
    };
    InputComponent.prototype.writeValue = function (obj) {
        this.amount = obj;
    };
    InputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    InputComponent.prototype.registerOnTouched = function (fn) {
    };
    InputComponent.prototype.setDisabledState = function (isDisabled) {
    };
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "controlLabel", void 0);
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "measure", void 0);
    __decorate([
        core_1.Input()
    ], InputComponent.prototype, "controlName", void 0);
    InputComponent = __decorate([
        core_1.Component({
            selector: '[kyf-input]',
            templateUrl: './input.component.html',
            styleUrls: ['./input.component.css'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return InputComponent; }),
                    multi: true
                }
            ]
        })
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
