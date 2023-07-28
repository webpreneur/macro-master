import { DataType } from "./data-type.ts";
import { FoodCategory } from "./food-category.ts";

export interface SampleFoodItem {
  /**
   * Example: 45551
   */
  fdcId: number;
  /**
   * Example: Sample
   */
  datatype: DataType;
  /**
   * Example: Beef, Tenderloin Roast, select, roasted, comp5, lean (34BLTR)
   */
  description: string;
  /**
   * Example: Composite
   */
  foodClass: string;
  /**
   * Example: 4/1/2019
   */
  publicationDate: string;
  /**
   */
  foodAttributes: FoodCategory[];
}
