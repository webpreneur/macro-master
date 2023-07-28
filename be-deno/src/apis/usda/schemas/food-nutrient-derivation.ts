import { FoodNutrientSource } from "./food-nutrient-source.ts";

export interface FoodNutrientDerivation {
  /**
   * Example: 75
   */
  id: number;
  /**
   * Example: LCCD
   */
  code: string;
  /**
   * Example: Calculated from a daily value percentage per serving size measure
   */
  description: string;
  /**
   */
  foodNutrientSource: FoodNutrientSource;
}
