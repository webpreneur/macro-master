export interface AbridgedFoodNutrient {
  /**
   * Example: 303
   */
  number: number;
  /**
   * Example: Iron, Fe
   */
  name: string;
  /**
   * Example: 0.53
   */
  amount: number;
  /**
   * Example: mg
   */
  unitName: string;
  /**
   * Example: LCCD
   */
  derivationCode: string;
  /**
   * Example: Calculated from a daily value percentage per serving size measure
   */
  derivationDescription: string;
}
