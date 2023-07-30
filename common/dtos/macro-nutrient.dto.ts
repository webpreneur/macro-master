type MacroNutrientDto = {
  nutrientId: number;
  nameEn: string;
  nameHu: string;
  energy: number;
  protein: number;
  totalFats: number;
  saturatedFats: number;
  monounsaturatedFats?: number;
  polyunsaturatedFats?: number;
  totalCarbohydrates: number;
  sugar: number;
  fiber?: number;
  sodium?: number;
  cholesterol?: number;
  glycemicIndex?: string;
  salt: number;
};

export default MacroNutrientDto;
