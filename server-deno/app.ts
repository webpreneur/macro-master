import logNutritionTable from "./macro-calculator/log-nutrition-table.ts";
import {
  EncodedMacroNutrients,
  MacroNutrient,
  MacroNutrientInput,
} from "./types.ts";
import calculateCalories from "./integrations/usda/utils/get-label-nutrients.ts";
import roundToDecimals from "./utils/number/round-to-decimals.ts";

const DEFAULT_LOSS = 20;

export class Macro {
  public static getMacro({
    db,
    code,
    weight,
  }: {
    code: number;
    weight: number;
    db: EncodedMacroNutrients;
  }): MacroNutrient | null {
    const nutrient = db[code];
    if (!nutrient) {
      return null;
    }

    const [, nutrientData] = nutrient;

    return {
      energy: (nutrientData.energy * weight) / 100,
      fats: {
        total: (nutrientData.fats.total * weight) / 100,
        saturated: (nutrientData.fats.saturated * weight) / 100,
      },
      carbohydrates: {
        total: (nutrientData.carbohydrates.total * weight) / 100,
        sugar: (nutrientData.carbohydrates.sugar * weight) / 100,
      },
      protein: (nutrientData.protein * weight) / 100,
      salt: (nutrientData.salt * weight) / 100,
    };
  }

  public static getAggregateMacro({
    db,
    ingredients,
    finalWeight,
  }: {
    db: EncodedMacroNutrients;
    ingredients: MacroNutrientInput[];
    finalWeight?: number;
  }): {
    macroPer100gRaw: MacroNutrient;
    macroPer100gCooked: MacroNutrient;
  } {

    let totalWeightOfIngredients = 0;
    let totalEnergyOfIngredients = 0;
    let totalFatOfIngredients = 0;
    let totalSaturatedFatOfIngredients = 0;
    let totalCarbohydrateOfIngredients = 0;
    let totalSugarOfIngredients = 0;
    let totalProteinOfIngredients = 0;
    let totalSaltOfIngredients = 0;

    ingredients.forEach(({ code, weight }) => {
      const nutrient = db[code];
      if (nutrient) {
        const [, nutrientData] = nutrient;

        totalWeightOfIngredients += weight;
        totalEnergyOfIngredients += (nutrientData.energy * weight) / 100;
        totalFatOfIngredients += (nutrientData.fats.total * weight) / 100;
        totalSaturatedFatOfIngredients += (nutrientData.fats.saturated * weight) / 100;
        totalCarbohydrateOfIngredients += (nutrientData.carbohydrates.total * weight) / 100;
        totalSugarOfIngredients += (nutrientData.carbohydrates.sugar * weight) / 100;
        totalProteinOfIngredients += (nutrientData.protein * weight) / 100;
        totalSaltOfIngredients += (nutrientData.salt * weight) / 100;
      }
    });

    if (!finalWeight) {
      finalWeight = totalWeightOfIngredients - (DEFAULT_LOSS * totalWeightOfIngredients) / 100;
      console.log(
        `Final weight was not provided. Calculating with ${DEFAULT_LOSS}% loss.`,
      );
    }

    console.log(`Total weight of all ingredients: ${totalWeightOfIngredients}g`);

    if (finalWeight) {
      console.log(`Final weight of the cooked meal: ${finalWeight}g`);
      const loss = totalWeightOfIngredients - finalWeight;
      const lossPercentage = (loss / totalWeightOfIngredients) * 100;
      console.log(
        `Weight loss during cooking: ${loss.toFixed(2)}g (${lossPercentage.toFixed(2)}%)`,
      );
    }
    console.log(`---`);
    
    logNutritionTable({
      db,
      ingredients,
      totalWeightOfIngredients,
    });

    if (finalWeight && finalWeight > totalWeightOfIngredients) {
      throw new Error(
        "The total weight of the ingredients cannot be greater than the final weight!",
      );
    }

    const macroPer100gRaw: MacroNutrient = {
      energy: roundToDecimals(totalEnergyOfIngredients / (totalWeightOfIngredients / 100), 0),
      fats: {
        total: roundToDecimals(totalFatOfIngredients / (totalWeightOfIngredients / 100)),
        saturated: roundToDecimals(totalSaturatedFatOfIngredients / (totalWeightOfIngredients / 100)),
      },
      carbohydrates: {
        total: roundToDecimals(totalCarbohydrateOfIngredients / (totalWeightOfIngredients / 100)),
        sugar: roundToDecimals(totalSugarOfIngredients / (totalWeightOfIngredients / 100)),
      },
      protein: roundToDecimals(totalProteinOfIngredients / (totalWeightOfIngredients / 100)),
      salt: roundToDecimals(totalSaltOfIngredients / (totalWeightOfIngredients / 100)),
    };

    const calculatedCalories = calculateCalories({
      carbs: macroPer100gRaw.carbohydrates.total,
      fat: macroPer100gRaw.fats.total,
      protein: macroPer100gRaw.protein,
    });

    const tolerance = 0.10 * macroPer100gRaw.energy;
    const lowerBound = macroPer100gRaw.energy - tolerance;
    const upperBound = macroPer100gRaw.energy + tolerance;

    if (calculatedCalories < lowerBound || calculatedCalories > upperBound) {
      console.warn(
        `The calculated calories (${calculatedCalories}) of the raw food deviate by more than 10% from the provided energy (${macroPer100gRaw.energy})!`,
      );
    } else {
      console.info("---");
      console.info(
        `The calculated calories (${calculatedCalories}) of the raw food deviate by less than 10% from the provided energy (${macroPer100gRaw.energy})!`,
      );
    }

    const macroPer100gCooked: MacroNutrient = {
      energy: roundToDecimals(((totalEnergyOfIngredients / finalWeight) * 100), 0),
      fats: {
        total: roundToDecimals((totalFatOfIngredients / finalWeight) * 100),
        saturated: roundToDecimals(
          (totalSaturatedFatOfIngredients / finalWeight) * 100,
        ),
      },
      carbohydrates: {
        total: roundToDecimals((totalCarbohydrateOfIngredients / finalWeight) * 100),
        sugar: roundToDecimals((totalSugarOfIngredients / finalWeight) * 100),
      },
      protein: roundToDecimals((totalProteinOfIngredients / finalWeight) * 100),
      salt: roundToDecimals((totalSaltOfIngredients / finalWeight) * 100),
    };

    return {
      macroPer100gCooked,
      macroPer100gRaw,
    };
  }
}
