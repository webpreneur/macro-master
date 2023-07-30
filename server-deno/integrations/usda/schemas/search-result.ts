import { FoodSearchCriteria } from "./food-search-criteria.ts";
import { SearchResultFood } from "./search-result-food.ts";

export interface SearchResult {
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
  /** 
   * The list of pages returned. 
   * Each page is a number. 
   * The first page is 1. 
   * The last page is totalPages. 
   * Example: [1,2,3,4,5,6,7,8,9,10]
  */
  pageList: number[];
  /** ... */
  foodSearchCriteria: FoodSearchCriteria;
  /** The list of foods found matching the search criteria. See Food Fields below.
   */
  foods: SearchResultFood[];
  /** ??? */
  aggregations: {
    dataType: Record<string, number>;
    nutrients: Record<string, unknown>;
  };
}
