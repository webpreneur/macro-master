import { FoodSearchCriteria } from "./food-search-criteria.ts";
import { SearchResultFood } from "./search-result-food.ts";

export interface SearchResult {
  /**
   */
  foodSearchCriteria: FoodSearchCriteria;
  /** The total number of foods found matching the search criteria.
   * Example: 1034
   */
  totalHits: number;
  /** The current page of results being returned.
   */
  currentPage: number;
  /** The total number of pages found matching the search criteria.
   */
  totalPages: number;
  /** The list of foods found matching the search criteria. See Food Fields below.
   */
  foods: SearchResultFood[];
}
