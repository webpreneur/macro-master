import db from "./db.ts";
import {
  EncodedMacroNutrients,
  MacroNutrient,
  MacroNutrientInput,
} from "./types.ts";

const roundToTwoDecimals = (value: number): number =>
  parseFloat(value.toFixed(2));

class Macro {
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
    macroPer100gCooked?: MacroNutrient;
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

    let macroPer100gCooked;
    if (finalWeight) {
      macroPer100gCooked = {
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
    }

    return {
      macroPer100gCooked,
    };
  }
}

console.table(
  Macro.getAggregateMacro({
    db,
    ingredients: [
      { code: 6, weight: 1000 },
      { code: 5, weight: 1030 },
      { code: 4, weight: 336 },
      { code: 3, weight: 20 },
      { code: 2, weight: 620 },
      { code: 1, weight: 960 },
    ],
    finalWeight: 2735,
  }),
);
