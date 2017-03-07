/* tslint:disable:no-unused-variable */
import {Calculator} from "./calculator";
import {Product} from "../domain/product";
import {BadIngredient, GoodIngredient} from "../domain/ingredient";

fdescribe('Calculator', () => {
    const calculator = new Calculator();

    it('should calculate score for show case products', () => {
        // given
        const kefir: Product = {
            name: 'Kefir', productType: 'Dairy', badIngredients: [
                {type: BadIngredient.Calories, amount: 41},
                {type: BadIngredient.Fats, amount: 0.6},
                {type: BadIngredient.Sugar, amount: 4.8},
                {type: BadIngredient.Salt, amount: 100}
            ],
            goodIngredients: [
                {type: GoodIngredient.Protein, amount: 3.6}]
        };

        const yogurt: Product = {
            name: 'Yogurt', productType: 'Dairy', badIngredients: [
                {type: BadIngredient.Calories, amount: 67},
                {type: BadIngredient.Fats, amount: 1.7},
                {type: BadIngredient.Sugar, amount: 5.8},
                {type: BadIngredient.Salt, amount: 200}
            ],
            goodIngredients: [
                {type: GoodIngredient.Protein, amount: 4.1}]
        };

        // when
        const gradeKefir = calculator.calculate(kefir);
        const gradeYogurt = calculator.calculate(yogurt);

        // then
        expect(calculator).toBeTruthy();
        expect(gradeKefir).toBe(0);
        expect(gradeYogurt).toBe(2);
    });


    it('should not include protein when bad score higher than 10 and good less than 5', () => {
        // given
        const product: Product = {
            name: 'Test', productType: 'Dairy', badIngredients: [
                {type: BadIngredient.Calories, amount: 2020},
                {type: BadIngredient.Fats, amount: 0},
                {type: BadIngredient.Sugar, amount: 30},
                {type: BadIngredient.Salt, amount: 0}
            ],
            goodIngredients: [
                {type: GoodIngredient.Protein, amount: 5}]
        };

        // when
        const grade = calculator.calculate(product);

        // then
        expect(calculator).toBeTruthy();
        expect(grade).toBe(12);
    });
})
;
