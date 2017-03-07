import {BadIngredient, GoodIngredient, Ingredient} from "../domain/ingredient";
import {Product} from "../domain/product";

const bad: number[][] = [
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

const good: number[][] = [
    [40, 0.9, 1.6],
    [40, 0.9, 1.6],
    [60, 1.9, 3.2],
    [65, 2.8, 4.8],
    [70, 3.7, 6.4],
    [80, 4.7, 8]
];


class IngredientThreshold {

    grade: number;
    threshold: number;
    upperLimit?: boolean = false;

    constructor(grade: number, threshold: number, upperLimit: boolean) {
        this.grade = grade;
        this.threshold = threshold;
        this.upperLimit = upperLimit;
    }

    checkThreshold(ingredient: Ingredient) {
        return this.upperLimit ? this.threshold >= ingredient.amount : this.threshold < ingredient.amount;
    }

}

const sum = (l: number[]) => {
    return l.reduce((a, b) => a + b, 0);
};

type ThresholdDictionary = {[key: string]: IngredientThreshold[]};

const initThresholds = function (thresholdInput: number[][], ingredients: string[]): ThresholdDictionary {
    const thresholds: ThresholdDictionary = {};
    ingredients.forEach(o => thresholds[o] = []);

    thresholdInput.forEach((v, i) => {
        ingredients.forEach((type,k) => {
            thresholds[type].push(new IngredientThreshold(i, v[k], i === 0));
        });
    });

    return thresholds;
};

const badThresholds: ThresholdDictionary = initThresholds(bad, Object.keys(BadIngredient));
const goodThresholds: ThresholdDictionary = initThresholds(good, Object.keys(GoodIngredient));


export class Calculator {

    calculate(product: Product): number {
        const badPoints = sum(product.badIngredients.map(ingredient => this.calculatedForIngredient(ingredient, false)));

        let goodPoints = sum(product.goodIngredients.map(ingredient => this.calculatedForIngredient(ingredient)));

        if (badPoints > 10 && goodPoints < 5) {
            goodPoints = sum(product.goodIngredients.filter(ingredient => ingredient.type !== GoodIngredient.Protein)
                .map(ingredient => this.calculatedForIngredient(ingredient)));
        }
        return badPoints - goodPoints;
    }

    calculatedForIngredient(ingredient: Ingredient, good = true): number {
        const thresholds = (good ? goodThresholds : badThresholds)[ingredient.type];
        let filtered = thresholds.filter((t) => t.checkThreshold(ingredient));
        return filtered.length > 0 ? filtered.reverse()[0].grade : 0;
    }

    assignGrade(score: number): string {
        if (score <= 4) {
            return 'A';
        } else if (score > 4 && score <= 8) {
            return 'B';
        } else if (score > 8 && score <= 16) {
            return 'C';
        } else if (score > 16 && score <= 32) {
            return 'D';
        } else {
            return 'E';
        }
    }

}
