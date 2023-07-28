import {
  KeysOfSearchResultFood,
  SearchResultFood,
} from "../schemas/search-result-food.ts";

const defaultProperties: KeysOfSearchResultFood[] = [
  "additionalDescriptions",
  "dataType",
  "description",
  "fdcId",
  "labelNutrients",
  "ingredients",
  "scientificName",
  "score",
  "foodNutrients",
];

const carbohydrates = new Set([
  "Carbohydrate, by difference",
  "Sucrose",
  "Galactose",
  "Glucose",
  "Fructose",
  "Lactose",
  "Maltose",
  "Sugars, Total",
  "Starch",
  "Fiber, total dietary",
  "Fiber, insoluble",
  "Fiber, soluble",
  "Carbohydrate, by summation",
]);

export const filterProperties = <T extends KeysOfSearchResultFood[]>(
  list: SearchResultFood[],
  properties: T = defaultProperties as T
): Pick<SearchResultFood, T[number]>[] => {
  const unitSet = new Set();
  const map = list.map((item) =>
    properties.reduce((acc, prop) => {
      if (prop === "foodNutrients" && Array.isArray(item[prop])) {
        // Using type assertion to convince TypeScript that acc has a 'foodNutrients' property
        (acc as any)[prop] = item[prop]
        .filter(nutrient => carbohydrates.has(nutrient.nutrientName))
        .map(
          ({ nutrientId, nutrientName, value, unitName }) => {
            unitSet.add(unitName);
            const nutrient = {
              nutrientId,
              nutrientName,
              value,
              unitName,
            };
            return nutrient;
          }
        );
      } else {
        (acc as any)[prop] = item[prop];
      }
      return acc;
    }, {} as Pick<SearchResultFood, T[number]>)
  );
  console.log([...unitSet]);
  return map;
};
