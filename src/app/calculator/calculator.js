"use strict";
var ingredient_1 = require("../domain/ingredient");
var IngredientThreshold = (function () {
    function IngredientThreshold(grade, threshold, upperLimit) {
        this.upperLimit = false;
        this.grade = grade;
        this.threshold = threshold;
        this.upperLimit = upperLimit;
    }
    IngredientThreshold.prototype.checkThreshold = function (ingredient) {
        return this.upperLimit ? this.threshold >= ingredient.amount : this.threshold < ingredient.amount;
    };
    return IngredientThreshold;
}());
var bad = [
    [335, 1, 4.5, 90],
    [335, 1, 4.5, 90],
    [670, 2, 9, 180],
    [1005, 3, 13.5, 270],
    [1340, 4, 18, 360],
    [1675, 5, 22.5, 450],
    [2010, 6, 27, 540],
    [2345, 7, 31, 630],
    [2680, 8, 36, 720],
    [3015, 9, 40, 810],
    [2350, 10, 45, 900]
];
var good = [
    [40, 0.9, 1.6],
    [40, 0.9, 1.6],
    [60, 1.9, 3.2],
    [0, 2.8, 4.8],
    [0, 3.7, 6.4],
    [80, 4.7, 8]
];
var initThresholds = function (ingredients, goodNotBad) {
    if (goodNotBad === void 0) { goodNotBad = true; }
    var thresholds = {};
    Object.keys(ingredients).forEach(function (o) { return thresholds[o] = []; });
    (goodNotBad ? good : bad).forEach(function (v, i) {
        Object.keys(ingredients).forEach(function (k) {
            thresholds[k].push(new IngredientThreshold(i, v[k], i === 0));
        });
    });
    return thresholds;
};
var badThresholds = initThresholds(Object.keys(ingredient_1.BadIngredient).map(function (n) { return ingredient_1.BadIngredient[n]; }), false);
var goodThresholds = initThresholds(Object.keys(ingredient_1.GoodIngredient).map(function (n) { return ingredient_1.GoodIngredient[n]; }));
var sum = function (l) {
    return l.reduce(function (a, b) { return a + b; }, 0);
};
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function (product) {
        var _this = this;
        var badPoints = sum(product.badIngredients.map(function (ingredient) { return _this.calculatedForIngredient(ingredient, false); }));
        var goodPoints = sum(product.goodIngredients.map(function (ingredient) { return _this.calculatedForIngredient(ingredient); }));
        if (badPoints > 10 && goodPoints < 5) {
            goodPoints = sum(product.goodIngredients.filter(function (ingredient) { return ingredient.type !== ingredient_1.GoodIngredient.Protein; })
                .map(function (ingredient) { return _this.calculatedForIngredient(ingredient); }));
        }
        return badPoints - goodPoints;
    };
    Calculator.prototype.calculatedForIngredient = function (ingredient, good) {
        if (good === void 0) { good = true; }
        var thresholds = (good ? goodThresholds : badThresholds)[ingredient.type];
        return thresholds.filter(function (t) { return t.checkThreshold(ingredient); }).reverse()[0].grade;
    };
    Calculator.prototype.assignGrade = function (score) {
        if (score <= 4) {
            return 'A';
        }
        else if (score > 4 && score <= 8) {
            return 'B';
        }
        else if (score > 8 && score <= 16) {
            return 'C';
        }
        else if (score > 16 && score <= 32) {
            return 'D';
        }
        else {
            return 'E';
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
