import { DataType } from "./data-type.ts";
import { SortBy } from "./sort-by.ts";

export interface FoodListCriteria {
  /** Optional. Filter on a specific data type; specify one or more values in an array.
   * Example: ['Foundation', 'SR Legacy']
   */
  dataType: DataType[];
  /** Optional. Maximum number of results to return for the current page. Default is 50.
   * Example: 25
   */
  pageSize: number;
  /** Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize)
   * Example: 2
   */
  pageNumber: number;
  /** Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases.
   */
  sortBy: SortBy;
  /** Optional. The sort direction for the results. Only applicable if sortBy is specified.
   */
  sortOrder: string;
}
