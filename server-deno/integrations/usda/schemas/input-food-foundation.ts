import { SampleFoodItem } from "./sample-food-item.ts";

export interface InputFoodFoundation {
  /**
   * Example: 45551
   */
  id: number;
  /**
   * Example: Beef, Tenderloin Roast, select, roasted, comp5, lean (34BLTR)
   */
  foodDescription: string;
  /**
   */
  inputFood: SampleFoodItem;
}
