export type MacroNutrient = {
  energy: number;
  protein: number;
  fat: number;
  carbohydrate: number;
};

export type EncodedMacroNutrients = {
  [id: number]: [string, MacroNutrient];
};

export type MacroNutrientInput = {
  code: number;
  weight: number;
};
