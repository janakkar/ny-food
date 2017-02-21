export enum GoodIngredient { Natural, Fibre, Protein};
export enum BadIngredient {Calories, SaturatedFats, SimpleSugars, Salt};

export class Ingredient {
  type: BadIngredient | GoodIngredient;

  amount: number;
}
