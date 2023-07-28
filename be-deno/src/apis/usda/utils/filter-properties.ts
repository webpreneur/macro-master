import {
  KeysOfSearchResultFood,
  SearchResultFood,
} from "../schemas/search-result-food.ts";

const defaultProperties: KeysOfSearchResultFood[] = [
  "additionalDescriptions",
  "dataType",
  "description",
  "fdcId",
  "foodNutrients",
  "ingredients",
  "scientificName",
  "score",
];

export const filterProperties = <T extends KeysOfSearchResultFood[]>(
  list: SearchResultFood[],
  properties: T = defaultProperties as T,
): Pick<SearchResultFood, T[number]>[] =>
  list.map((item) =>
    properties.reduce((acc, prop) => {
      (acc as any)[prop] = item[prop];
      return acc;
    }, {} as Pick<SearchResultFood, T[number]>)
  );
