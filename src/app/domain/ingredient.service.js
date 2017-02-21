"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ingredient_1 = require("./ingredient");
var IngredientMetadata = (function () {
    function IngredientMetadata(metric, label, name) {
        this.metric = metric;
        this.label = label;
        this.name = name;
    }
    return IngredientMetadata;
}());
var metadata = {};
var reg = new RegExp('\d+');
var checkNumber = function (s) {
    return s.match(reg);
};
var initMetadata = function () {
    var createMetadata = function (k) {
        var label = k.substr(0, 3);
        metadata[k] = new IngredientMetadata('mg', label, label.toLowerCase());
    };
    Object.keys(ingredient_1.BadIngredient).filter(function (n) { return !checkNumber(n); }).forEach(createMetadata);
    Object.keys(ingredient_1.BadIngredient).filter(function (n) { return !checkNumber(n); }).forEach(createMetadata);
    metadata[ingredient_1.BadIngredient.Calories].metric = 'kJ';
    console.log(metadata);
};
var IngredientService = (function () {
    function IngredientService() {
        initMetadata();
    }
    IngredientService.prototype.getMetadata = function () {
        return metadata;
    };
    IngredientService = __decorate([
        core_1.Injectable()
    ], IngredientService);
    return IngredientService;
}());
exports.IngredientService = IngredientService;
