import { RetentionFactor } from "./retention-factor.ts";
import { SurveyFoodItem } from "./survey-food-item.ts";

export interface InputFoodSurvey {
  /**
   * Example: 18146
   */
  id: number;
  /**
   * Example: 1.5
   */
  amount: number;
  /**
   * Example: Spices, curry powder
   */
  foodDescription: string;
  /**
   * Example: 2015
   */
  ingredientCode: number;
  /**
   * Example: Spices, curry powder
   */
  ingredientDescription: string;
  /**
   * Example: 9.45
   */
  ingredientWeight: number;
  /**
   * Example: 21000
   */
  portionCode: string;
  /**
   * Example: 1 tablespoon
   */
  portionDescription: string;
  /**
   * Example: 6
   */
  sequenceNumber: number;
  /**
   * Example: 0
   */
  surveyFlag: number;
  /**
   * Example: TB
   */
  unit: string;
  /**
   */
  inputFood: SurveyFoodItem;
  /**
   */
  retentionFactor: RetentionFactor;
}
