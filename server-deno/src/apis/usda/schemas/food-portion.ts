import { MeasureUnit } from "./measure-unit.ts";

export interface FoodPortion {
  /**
   * Example: 135806
   */
  id: number;
  /**
   * Example: 1
   */
  amount: number;
  /**
   * Example: 9
   */
  dataPoints: number;
  /**
   * Example: 91
   */
  gramWeight: number;
  /**
   * Example: 2011
   */
  minYearAcquired: number;
  /**
   * Example: 10205
   */
  modifier: string;
  /**
   * Example: 1 cup
   */
  portionDescription: string;
  /**
   * Example: 1
   */
  sequenceNumber: number;
  /**
   */
  measureUnit: MeasureUnit;
}
