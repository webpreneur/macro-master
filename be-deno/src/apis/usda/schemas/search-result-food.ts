import { AbridgedFoodNutrient } from "./abridged-food-nutrient.ts";

export interface SearchResultFood {
  /** Unique ID of the food.
   * Example: 45001529
   */
  fdcId: number;
  /** The type of the food data.
   * Example: Branded
   */
  dataType: string;
  /** The description of the food.
   * Example: BROCCOLI
   */
  description: string;
  /** Any A unique ID identifying the food within FNDDS.
   */
  foodCode: string;
  /**
   */
  foodNutrients: AbridgedFoodNutrient[];
  /** Date the item was published to FDC.
   * Example: 4/1/2019
   */
  publicationDate: string;
  /** The scientific name of the food.
   */
  scientificName: string;
  /** Brand owner for the food. Only applies to Branded Foods.
   * Example: Supervalu, Inc.
   */
  brandOwner: string;
  /** GTIN or UPC code identifying the food. Only applies to Branded Foods.
   * Example: 041303020937
   */
  gtinUpc: string;
  /** The list of ingredients (as it appears on the product label). Only applies to Branded Foods.
   */
  ingredients: string;
  /** Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods.
   */
  ndbNumber: number;
  /** Any additional descriptions of the food.
   * Example: Coon; sharp cheese; Tillamook; Hoop; Pioneer; New York; Wisconsin; Longhorn
   */
  additionalDescriptions: string;
  /** allHighlightFields
   */
  allHighlightFields: string;
  /** Relative score indicating how well the food matches the search criteria.
   */
  score: number;
}
