import { AbridgedFoodNutrient } from "../schemas/abridged-food-nutrient.ts";
import { SearchResultFood } from "../schemas/search-result-food.ts";

export const extractUniqueNutrientNames = (
  foods: SearchResultFood[]
): string[] => {
  const namesSet: Set<string> = new Set();
  foods.forEach(({ foodNutrients }) => {
    console.log(foodNutrients);
    if (foodNutrients) {
      foodNutrients.forEach(({ nutrientName }: AbridgedFoodNutrient) => {
        if (nutrientName) {
          namesSet.add(nutrientName);
        }
      });
    }
  });

  return [...namesSet].slice(-9);
};
