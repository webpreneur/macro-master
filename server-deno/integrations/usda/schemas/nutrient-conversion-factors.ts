export type NutrientConversionFactors =
  | ProteinConversionFactor
  | CalorieConversionFactor
  | FatConversionFactor;

/**
 * Value: The multiplication factor used to calculate protein from nitrogen
 */
interface ProteinConversionFactor extends ConversionFactor {
  type: CONVERSION_FACTOR.PROTEIN;
}
/**
 * The multiplication factors to be used 
 * when calculating energy from macronutrients for a specific food.
 */
interface CalorieConversionFactor extends Omit<ConversionFactor, "value"> {
  type: CONVERSION_FACTOR.CALORIE;
  // The multiplication factor for protein
  proteinValue: number;
  // The multiplication factor for fat
  fatValue: number;
  // The multiplication factor for carbohydrates
  carbohydrateValue: number;
}

/**
 * The multiplication factor to convert from fat NLEA (298) to total fat (204)
 */
interface FatConversionFactor extends Omit<ConversionFactor, "value"> {
  type: CONVERSION_FACTOR.FAT;
  fatNleaValue: number;
}

enum CONVERSION_FACTOR {
  PROTEIN = ".ProteinConversionFactor",
  CALORIE = ".CalorieConversionFactor",
  FAT = ".FatConversionFactor",
}
interface ConversionFactor {
  type: CONVERSION_FACTOR;
  value: number;
}
