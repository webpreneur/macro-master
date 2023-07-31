import { AbridgedFoodNutrient } from "./abridged-food-nutrient.ts";
import { DATA_TYPE_ENUM } from "./data-type.ts";

export interface AbridgedFoodItem {
  /**
   * Example: Branded
   */
  dataType: DATA_TYPE_ENUM;
  /**
   * Example: NUT 'N BERRY MIX
   */
  description: string;
  /**
   * Example: 534358
   */
  fdcId: number;
  /**
   */
  foodNutrients: AbridgedFoodNutrient[];
  /**
   * Example: 4/1/2019
   */
  publicationDate: string;
  /** only applies to Branded Foods
   * Example: Kar Nut Products Company
   */
  brandOwner: string;
  /** only applies to Branded Foods
   * Example: 077034085228
   */
  gtinUpc: string;
  /** only applies to Foundation and SRLegacy Foods
   * Example: 7954
   */
  ndbNumber: number;
  /** only applies to Survey Foods
   * Example: 27415110
   */
  foodCode: string;
}
