"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.showList = false;
        this.propagateChange = function (_) {
        };
        this.onSelected = new core_1.EventEmitter();
    }
    DropdownComponent.prototype.openList = function () {
        this.showList = true;
    };
    DropdownComponent.prototype.closeList = function () {
        this.showList = false;
    };
    DropdownComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
        this.onSelected.emit(this.selectedItem);
        this.propagateChange(this.selectedItem);
    };
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent.prototype.getSelectedItem = function () {
        if (this.selectedItem) {
            return this.idPropertyName ? this.selectedItem[this.idPropertyName] : this.selectedItem;
        }
        else {
            return '';
        }
    };
    DropdownComponent.prototype.writeValue = function (obj) {
        if (obj !== undefined) {
            this.selectedItem = obj;
        }
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
    };
    DropdownComponent.prototype.setDisabledState = function (isDisabled) {
    };
    __decorate([
        core_1.Input()
    ], DropdownComponent.prototype, "listItems", void 0);
    __decorate([
        core_1.Input()
    ], DropdownComponent.prototype, "idPropertyName", void 0);
    __decorate([
        core_1.Input()
    ], DropdownComponent.prototype, "listPropertyName", void 0);
    __decorate([
        core_1.Output()
    ], DropdownComponent.prototype, "onSelected", void 0);
    DropdownComponent = __decorate([
        core_1.Component({
            selector: 'kyf-dropdown',
            templateUrl: './dropdown.component.html',
            styleUrls: ['./dropdown.component.css'],
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DropdownComponent; }),
                    multi: true
                }
            ]
        })
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
