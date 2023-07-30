/**
 * @file This module provides functionality to display nutritional information in table format.
 */

import { EncodedMacroNutrients, MacroNutrientInput } from "../types.ts";

type TableDataEntry = {
  Ingredient: string;
  "Energy (kcal/100g)": string;
  "Contribution (g)": string;
  "Contribution (%)": string;
};

type NutritionTableInput = {
  db: EncodedMacroNutrients;
  ingredients: MacroNutrientInput[];
  totalWeightOfIngredients: number;
};

/**
 * Logs the nutritional information of ingredients in a tabular format.
 *
 * @param {NutritionTableInput} input - The input object containing db, ingredients and totalWeightOfIngredients.
 * @returns {void}
 */
function logNutritionTable(input: NutritionTableInput): void {
  const { db, ingredients, totalWeightOfIngredients } = input;
  const tableData: TableDataEntry[] = [];

  ingredients.forEach(({ code, weight }) => {
    const nutrient = db[code];
    const percentage = ((weight / totalWeightOfIngredients) * 100).toFixed(2);

    tableData.push({
      Ingredient: db[code][0],
      "Energy (kcal/100g)": `${nutrient[1].energy} kcal`,
      "Contribution (g)": `${weight} g`,
      "Contribution (%)": `${percentage} %`,
    });
  });

  console.table(tableData);
}

export default logNutritionTable;
