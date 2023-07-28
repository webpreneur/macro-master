import { Nutrient } from "./nutrient.ts";
import { FoodNutrientDerivation } from "./food-nutrient-derivation.ts";
import { NutrientAnalysisDetails } from "./nutrient-analysis-details.ts";

export interface FoodNutrient {
  /**
   * Example: 167514
   */
  id: number;
  /**
   * Example: 0E-8
   */
  amount: number;
  /**
   * Example: 49
   */
  dataPoints: number;
  /**
   * Example: 73.73
   */
  min: number;
  /**
   * Example: 91.8
   */
  max: number;
  /**
   * Example: 90.3
   */
  median: number;
  /**
   * Example: FoodNutrient
   */
  type: string;
  /**
   */
  nutrient: Nutrient;
  /**
   */
  foodNutrientDerivation: FoodNutrientDerivation;
  /**
   */
  nutrientAnalysisDetails: NutrientAnalysisDetails;
}
