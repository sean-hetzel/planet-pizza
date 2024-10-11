export interface Ingredient {
  name: string;
  emoji: string;
  type: string;
  quantity?: number;
}

export interface Recipe {
  name: string;
  ingredients: Ingredient[];
}
