/**
 * Specify one of the possible values to sort by that field.
 * Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases.
 */
export type SortBy =
  | "dataType.keyword"
  | "lowercaseDescription.keyword"
  | "fdcId"
  | "publishedDate";
