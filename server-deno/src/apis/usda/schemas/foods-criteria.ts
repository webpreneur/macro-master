export interface FoodsCriteria {
  /** List of multiple FDC ID's
   * Example: [534358, 373052, 616350]
   */
  fdcIds: number[];
  /** Optional. 'abridged' for an abridged set of elements, 'full' for all elements (default).
   */
  format: string;
  /** Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned.  If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element.
   * Example: [203, 204, 205]
   */
  nutrients: number[];
}
