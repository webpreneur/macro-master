import calculateCalories from "./src/apis/usda/utils/get-label-nutrients.ts";
import {
  EncodedMacroNutrients,
  MacroNutrient,
  MacroNutrientInput,
} from "./types.ts";

const DEFAULT_LOSS = 20;


const roundToTwoDecimals = (value: number): number =>
  parseFloat(value.toFixed(2));

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
      protein: (nutrientData.protein * weight) / 100,
      fats: {
        total: (nutrientData.fats.total * weight) / 100,
        saturated: (nutrientData.fats.saturated * weight) / 100,
      },
      carbohydrates: {
        total: (nutrientData.carbohydrates.total * weight) / 100,
        sugar: (nutrientData.carbohydrates.sugar * weight) / 100,
      },
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



    let totalWeight = 0;
    let totalEnergy = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSaturatedFat = 0;
    let totalCarbohydrate = 0;
    let totalSugar = 0;
    let totalSalt = 0;

    ingredients.forEach(({ code, weight }) => {
      const nutrient = db[code];
      if (nutrient) {
        const [, nutrientData] = nutrient;

        totalWeight += weight;
        totalEnergy += (nutrientData.energy * weight) / 100;
        totalProtein += (nutrientData.protein * weight) / 100;
        totalFat += (nutrientData.fats.total * weight) / 100;
        totalSaturatedFat += (nutrientData.fats.saturated * weight) / 100;
        totalCarbohydrate += (nutrientData.carbohydrates.total * weight) / 100;
        totalSugar += (nutrientData.carbohydrates.sugar * weight) / 100;
        totalSalt += (nutrientData.salt * weight) / 100;
      }
    });

    if (!finalWeight) {
      finalWeight = totalWeight - (DEFAULT_LOSS * totalWeight) / 100;
      console.log(
        `Final weight was not provided. Calculating with ${DEFAULT_LOSS}% loss.`,
      );
    }

    console.log(`Total weight of all ingredients: ${totalWeight}g`);

    if (finalWeight) {
      console.log(`Final weight of the cooked meal: ${finalWeight}g`);
      const loss = totalWeight - finalWeight;
      const lossPercentage = (loss / totalWeight) * 100;
      console.log(
        `Weight loss during cooking: ${loss.toFixed(2)}g (${lossPercentage.toFixed(2)}%)`,
      );
    }
    console.log(`---`);

    ingredients.forEach(({ code, weight }) => {
      const percentage = ((weight / totalWeight) * 100).toFixed(2);
      console.log(
        `Ingredient of ${
          db[code][0]
        } contributed ${weight}g, which is ${percentage}% of the total.`,
      );
    });

    if (finalWeight && finalWeight > totalWeight) {
      throw new Error(
        "The total weight of the ingredients cannot be greater than the final weight!",
      );
    }

    const macroPer100gRaw: MacroNutrient = {
      energy: roundToTwoDecimals(totalEnergy / (totalWeight / 100)),
      protein: roundToTwoDecimals(totalProtein / (totalWeight / 100)),
      fats: {
        total: roundToTwoDecimals(totalFat / (totalWeight / 100)),
        saturated: roundToTwoDecimals(totalSaturatedFat / (totalWeight / 100)),
      },
      carbohydrates: {
        total: roundToTwoDecimals(totalCarbohydrate / (totalWeight / 100)),
        sugar: roundToTwoDecimals(totalSugar / (totalWeight / 100)),
      },
      salt: roundToTwoDecimals(totalSalt / (totalWeight / 100)),
    };

    const calculatedCalories = calculateCalories({
      carbs: macroPer100gRaw.carbohydrates.total,
      protein: macroPer100gRaw.protein,
      fat: macroPer100gRaw.fats.total,
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
      energy: roundToTwoDecimals((totalEnergy / finalWeight) * 100),
      protein: roundToTwoDecimals((totalProtein / finalWeight) * 100),
      fats: {
        total: roundToTwoDecimals((totalFat / finalWeight) * 100),
        saturated: roundToTwoDecimals(
          (totalSaturatedFat / finalWeight) * 100,
        ),
      },
      carbohydrates: {
        total: roundToTwoDecimals((totalCarbohydrate / finalWeight) * 100),
        sugar: roundToTwoDecimals((totalSugar / finalWeight) * 100),
      },
      salt: roundToTwoDecimals((totalSalt / finalWeight) * 100),
    };

    return {
      macroPer100gCooked,
      macroPer100gRaw,
    };
  }
}
