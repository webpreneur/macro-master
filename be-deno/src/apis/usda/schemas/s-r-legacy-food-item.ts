import { DataType } from "./data-type.ts";
import { FoodCategory } from "./food-category.ts";
import { FoodNutrient } from "./food-nutrient.ts";
import { NutrientConversionFactors } from "./nutrient-conversion-factors.ts";

export interface SRLegacyFoodItem {
  /**
   * Example: 170379
   */
  fdcId: number;
  /**
   * Example: SR Legacy
   */
  dataType: DataType;
  /**
   * Example: Broccoli, raw
   */
  description: string;
  /**
   * Example: FinalFood
   */
  foodClass: string;
  /**
   * Example: True
   */
  isHistoricalReference: boolean;
  /**
   * Example: 11090
   */
  ndbNumber: number;
  /**
   * Example: 4/1/2019
   */
  publicationDate: string;
  /**
   * Example: Brassica oleracea var. italica
   */
  scientificName: string;
  /**
   */
  foodCategory: FoodCategory;
  /**
   */
  foodNutrients: FoodNutrient[];
  /**
   */
  nutrientConversionFactors: NutrientConversionFactors[];
}
