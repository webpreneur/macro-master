import { FoodAttribute } from "./food-attribute.ts";
import { FoodPortion } from "./food-portion.ts";
import { InputFoodSurvey } from "./input-food-survey.ts";
import { WweiaFoodCategory } from "./wweia-food-category.ts";

export interface SurveyFoodItem {
  /**
   * Example: 337985
   */
  fdcId: number;
  /**
   * Example: Survey (FNDDS)
   */
  datatype: string;
  /**
   * Example: Beef curry
   */
  description: string;
  /**
   * Example: 12/31/2014
   */
  endDate: string;
  /**
   * Example: Survey
   */
  foodClass: string;
  /**
   * Example: 27116100
   */
  foodCode: string;
  /**
   * Example: 4/1/2019
   */
  publicationDate: string;
  /**
   * Example: 1/1/2013
   */
  startDate: string;
  /**
   */
  foodAttributes: FoodAttribute[];
  /**
   */
  foodPortions: FoodPortion[];
  /**
   */
  inputFoods: InputFoodSurvey[];
  /**
   */
  wweiaFoodCategory: WweiaFoodCategory;
}
