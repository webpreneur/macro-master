import { DataType } from "./schemas/data-type.ts";
import { UnitName } from "./schemas/unit-name.ts";

interface FoodNutrient {
  number: number;
  name: string;
  amount: number;
  unitName: UnitName;
  derivationCode: string;
  derivationDescription: string;
}

interface FoodResponse {
  dataType: DataType;
  description: string;
  fdcId: number;
  foodNutrients: FoodNutrient[];
  publicationDate: string;
  brandOwner: string;
  gtinUpc: string;
  ndbNumber: number;
  foodCode: string;
}

// A válasz egy tömb, tehát az alábbi módon használhatod:
type FoodsResponse = FoodResponse[];
