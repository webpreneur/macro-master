export type MacroNutrient = {
  energy: number;
  protein: number;
  fats: {
    total: number;
    saturated: number;
  };
  carbohydrates: {
    total: number;
    sugar: number;
  };
  salt: number;
};

export type EncodedMacroNutrients = {
  [id: number]: [string, MacroNutrient];
};

export type MacroNutrientInput = {
  code: number;
  weight: number;
};
