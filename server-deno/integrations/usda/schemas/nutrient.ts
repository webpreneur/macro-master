import { UnitName } from "./unit-name.ts";

export interface Nutrient {
  /**
   * Example: 1005
   */
  id: number;
  /**
   * Example: 305
   */
  number: string;
  /**
   * Example: Carbohydrate, by difference
   */
  name: string;
  /**
   * Example: 1110
   */
  rank: number;
  /**
   * Example: g
   */
  unitName: UnitName;
}
