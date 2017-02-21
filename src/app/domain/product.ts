import {Ingredient} from "./ingredient";

export class Product {
  name: string;
  brand?: string;
  description?: string;
  weight?: number;

  productType?: string;

  badIngredients: Ingredient[];
  goodIngredients: Ingredient[];
}

