export type MacroNutrient = {
  names?: {
    en: string; // Angol név
    hu: string; // Magyar név
  };
  energy: number;
  protein: number;
  fats: {
    total: number;
    saturated: number;
    monounsaturated?: number; // Egyszeresen telítetlen zsír
    polyunsaturated?: number; // Többszörösen telítetlen zsír
  };
  carbohydrates: {
    total: number;
    sugar: number;
  };
  fiber?: number; // Rost
  sodium?: number; // Nátrium
  cholesterol?: number; // Koleszterin
  glycemicIndex?: string; // Glikémiás Index
  salt: number;
};

export type EncodedMacroNutrients = {
  [id: number]: [string, MacroNutrient];
};

export type MacroNutrientInput = {
  code: number;
  weight: number;
};
