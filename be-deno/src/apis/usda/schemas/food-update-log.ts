import { FoodAttribute } from "./food-attribute.ts";

export interface FoodUpdateLog {
  /**
   * Example: 534358
   */
  fdcId: number;
  /**
   * Example: 8/18/2018
   */
  availableDate: string;
  /**
   * Example: Kar Nut Products Company
   */
  brandOwner: string;
  /**
   * Example: LI
   */
  dataSource: string;
  /**
   * Example: Branded
   */
  dataType: string;
  /**
   * Example: NUT 'N BERRY MIX
   */
  description: string;
  /**
   * Example: Branded
   */
  foodClass: string;
  /**
   * Example: 077034085228
   */
  gtinUpc: string;
  /**
   * Example: 1 ONZ
   */
  householdServingFullText: string;
  /**
   * Example: PEANUTS (PEANUTS, PEANUT AND/OR SUNFLOWER OIL). RAISINS. DRIED CRANBERRIES (CRANBERRIES, SUGAR, SUNFLOWER OIL). SUNFLOWER KERNELS AND ALMONDS (SUNFLOWER KERNELS AND ALMONDS, PEANUT AND/OR SUNFLOWER OIL).
   */
  ingredients: string;
  /**
   * Example: 8/18/2018
   */
  modifiedDate: string;
  /**
   * Example: 4/1/2019
   */
  publicationDate: string;
  /**
   * Example: 28
   */
  servingSize: number;
  /**
   * Example: g
   */
  servingSizeUnit: string;
  /**
   * Example: Popcorn, Peanuts, Seeds & Related Snacks
   */
  brandedFoodCategory: string;
  /**
   * Example: Nutrient Added, Nutrient Updated
   */
  changes: string;
  /**
   */
  foodAttributes: FoodAttribute[];
}
