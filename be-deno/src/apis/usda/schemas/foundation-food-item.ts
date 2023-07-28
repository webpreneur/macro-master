import { DataType } from "./data-type.ts";
import { FoodCategory } from "./food-category.ts";
import { FoodComponent } from "./food-component.ts";
import { FoodNutrient } from "./food-nutrient.ts";
import { FoodPortion } from "./food-portion.ts";
import { InputFoodFoundation } from "./input-food-foundation.ts";
import { NutrientConversionFactors } from "./nutrient-conversion-factors.ts";

export interface FoundationFoodItem {
  /**
   * Example: 747448
   */
  fdcId: number;
  /**
   * Example: Foundation
   */
  dataType: DataType;
  /**
   * Example: Strawberries, raw
   */
  description: string;
  /**
   * Example: FinalFood
   */
  foodClass: string;
  /**
   * Example: Source number reflects the actual number of samples analyzed for a nutrient. Repeat nutrient analyses may have been done on the same sample with the values shown.
   */
  footNote: string;
  /**
   * Example: False
   */
  isHistoricalReference: boolean;
  /**
   * Example: 9316
   */
  ndbNumber: number;
  /**
   * Example: 12/16/2019
   */
  publicationDate: string;
  /**
   * Example: Fragaria X ananassa
   */
  scientificName: string;
  /**
   */
  foodCategory: FoodCategory;
  /**
   */
  foodComponents: FoodComponent[];
  /**
   */
  foodNutrients: FoodNutrient[];
  /**
   */
  foodPortions: FoodPortion[];
  /**
   */
  inputFoods: InputFoodFoundation[];
  /**
   */
  nutrientConversionFactors: NutrientConversionFactors[];
}
