import { DataType } from "./data-type.ts";
import { SortBy } from "./sort-by.ts";

export interface FoodSearchCriteria {
  /** Search terms to use in the search. The string may also include standard [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2)
   * Example: Cheddar cheese
   */
  query: string;
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
  /** Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and description.keyword will be description in future releases.
   */
  sortBy: SortBy;
  /** Optional. The sort direction for the results. Only applicable if sortBy is specified.
   */
  sortOrder: string;
  /** Optional. Filter results based on the brand owner of the food. Only applies to Branded Foods.
   * Example: Kar Nut Products Company
   */
  brandOwner: string;
  /** Optional. Filter foods containing any of the specified trade channels.
   * Example: ['“CHILD_NUTRITION_FOOD_PROGRAMS”', '“GROCERY”']
   */
  tradeChannel: string[];
  /** Filter foods published on or after this date. Format: YYYY-MM-DD
   * Example: 2021-01-01
   */
  startDate: string;
  /** Filter foods published on or before this date. Format: YYYY-MM-DD
   * Example: 2021-12-30
   */
  endDate: string;
}
