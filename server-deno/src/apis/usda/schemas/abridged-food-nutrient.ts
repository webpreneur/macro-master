import { UnitName } from "./unit-name.ts";

export interface AbridgedFoodNutrient {
  nutrientId: number;
  nutrientName: string;
  nutrientNumber: string;
  unitName: UnitName;
  derivationCode: string;
  derivationDescription: string;
  derivationId: number;
  value: number;
  foodNutrientSourceId: number;
  foodNutrientSourceCode: string;
  foodNutrientSourceDescription: string;
  rank: number;
  indentLevel: number;
  foodNutrientId: number;
}
