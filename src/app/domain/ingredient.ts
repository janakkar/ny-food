/**
 * Good ingredients.
 */
export const NATURAL = 'Natural';
export const FIBRE = 'Fibre';
export const PROTEIN = 'Protein';
/**
 * Bad ingredients.
 */
export const CALORIES = 'Calories';
export const SATURATED_FATS = 'Fats';
export const SIMPLE_SUGARS = 'Sugar';
export const SALT = 'Salt';

export const GoodIngredient = {
    Natural: NATURAL,
    Fibre: FIBRE,
    Protein: PROTEIN
};

export const BadIngredient = {
    Calories: CALORIES,
    Fats: SATURATED_FATS,
    Sugar: SIMPLE_SUGARS,
    Salt: SALT,
};

export class Ingredient {

    constructor(type: string, amount: number) {
        this.type = type;
        this.amount = amount;
    }

    type: string;

    amount: number;
}
