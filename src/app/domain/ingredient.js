"use strict";
(function (GoodIngredient) {
    GoodIngredient[GoodIngredient["Natural"] = 0] = "Natural";
    GoodIngredient[GoodIngredient["Fibre"] = 1] = "Fibre";
    GoodIngredient[GoodIngredient["Protein"] = 2] = "Protein";
})(exports.GoodIngredient || (exports.GoodIngredient = {}));
var GoodIngredient = exports.GoodIngredient;
;
(function (BadIngredient) {
    BadIngredient[BadIngredient["Calories"] = 0] = "Calories";
    BadIngredient[BadIngredient["SaturatedFats"] = 1] = "SaturatedFats";
    BadIngredient[BadIngredient["SimpleSugars"] = 2] = "SimpleSugars";
    BadIngredient[BadIngredient["Salt"] = 3] = "Salt";
})(exports.BadIngredient || (exports.BadIngredient = {}));
var BadIngredient = exports.BadIngredient;
;
var Ingredient = (function () {
    function Ingredient() {
    }
    return Ingredient;
}());
exports.Ingredient = Ingredient;
