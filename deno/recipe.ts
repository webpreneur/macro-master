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

    const [, { energy, protein, carbohydrate, fat }] = nutrient;

    return {
      energy: (energy * weight) / 100,
      protein: (protein * weight) / 100,
      fat: (fat * weight) / 100,
      carbohydrate: (carbohydrate * weight) / 100,
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
    macroPer100gCooked?: MacroNutrient; // Új kimeneti mező
  } {
    let totalWeight = 0;
    let totalEnergy = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCarbohydrate = 0;

    ingredients.forEach(({ code, weight }) => {
      const nutrient = db[code];
      if (nutrient) {
        totalWeight += weight;
        totalEnergy += (nutrient[1].energy * weight) / 100;
        totalProtein += (nutrient[1].protein * weight) / 100;
        totalFat += (nutrient[1].fat * weight) / 100;
        totalCarbohydrate += (nutrient[1].carbohydrate * weight) / 100;
      }
    });

    const macroPer100gRaw = {
      energy: roundToTwoDecimals(totalEnergy / (totalWeight / 100)),
      protein: roundToTwoDecimals(totalProtein / (totalWeight / 100)),
      fat: roundToTwoDecimals(totalFat / (totalWeight / 100)),
      carbohydrate: roundToTwoDecimals(totalCarbohydrate / (totalWeight / 100)),
    };

    let macroPer100gCooked;
    if (finalWeight) {
      macroPer100gCooked = {
        energy: roundToTwoDecimals((totalEnergy / finalWeight) * 100),
        protein: roundToTwoDecimals((totalProtein / finalWeight) * 100),
        fat: roundToTwoDecimals((totalFat / finalWeight) * 100),
        carbohydrate: roundToTwoDecimals(
          (totalCarbohydrate / finalWeight) * 100
        ),
      };
    }

    return {
/*       totalWeight,
      totalMacro: {
        energy: roundToTwoDecimals(totalEnergy),
        protein: roundToTwoDecimals(totalProtein),
        fat: roundToTwoDecimals(totalFat),
        carbohydrate: roundToTwoDecimals(totalCarbohydrate),
      }, */
      macroPer100gRaw,
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
  })
);

/* console.table([
  {
    Kód: 4,
    Alapanyag: "répa",
  },
  {
    Kód: 6,
    Alapanyag: "vöröshagyma",
  },
]); */
