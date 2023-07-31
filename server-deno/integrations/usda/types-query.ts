import { DATA_TYPE_ENUM } from "./schemas/data-type.ts";
import { SortBy } from "./schemas/sort-by.ts";

type SortOrder = "asc" | "desc";

export interface QueryParameters {
  /** 
   * Optional. Filter on a specific data type; specify one or more values in an array.
   * Available values: Branded, Foundation, Survey (FNDDS), SR Legacy
   * Example: ["Foundation", "SR Legacy"]
   */
  dataType?: DATA_TYPE_ENUM[];

  /** 
   * Optional. Maximum number of results to return for the current page.
   * Minimum: 1
   * Maximum: 200
   * Default is 50.
   * Example: 25
   */
  pageSize?: number;

  /** 
   * Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize)
   * Example: 2
   */
  pageNumber?: number;

  /** 
   * Optional. Specify one of the possible values to sort by that field.
   * Note: dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases.
   * Available values: dataType.keyword, lowercaseDescription.keyword, fdcId, publishedDate
   */
  sortBy?: SortBy;

  /** 
   * Optional. The sort direction for the results. Only applicable if sortBy is specified.
   * Available values: asc, desc
   */
  sortOrder?: SortOrder;
}