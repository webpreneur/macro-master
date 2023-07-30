interface INutrientName {
  Iron: "Fe";
  Magnesium: "Mg";
  Phosphorus: "P";
  // ... többi érték
  PUFA_22_5_c: "PUFA 22:5 c";
  PUFA_22_6_c: "PUFA 22:6 c";
}
type NutrientName =
  | "Iron, Fe"
  | "Magnesium, Mg"
  | "Phosphorus, P"
  // ... többi érték
  | "PUFA 22:5 c"
  | "PUFA 22:6 c";

export enum NUTRIENT_NAME {
  Iron = "Iron, Fe",
  Magnesium = "Magnesium, Mg",
  Phosphorus = "Phosphorus, P",
  Potassium = "Potassium, K",
  Sodium = "Sodium, Na",
  Zinc = "Zinc, Zn",
  Copper = "Copper, Cu",
  Nitrogen = "Nitrogen",
  TotalLipid = "Total lipid (fat)",
  Manganese = "Manganese, Mn",
  Thiamin = "Thiamin",
  Riboflavin = "Riboflavin",
  Ash = "Ash",
  Niacin = "Niacin",
  Selenium = "Selenium, Se",
  TotalDietaryFiber = "Fiber, total dietary",
  VitaminB6 = "Vitamin B-6",
  Biotin = "Biotin",
  TotalFolate = "Folate, total",
  Water = "Water",
  Calcium = "Calcium, Ca",
  Protein = "Protein",
  CarbohydrateDifference = "Carbohydrate, by difference",
  EnergyGeneralFactors = "Energy (Atwater General Factors)",
  EnergySpecificFactors = "Energy (Atwater Specific Factors)",
  CitricAcid = "Citric acid",
  VitaminC = "Vitamin C, total ascorbic acid",
  MalicAcid = "Malic acid",
  OxalicAcid = "Oxalic acid",
  QuinicAcid = "Quinic acid",
  Sucrose = "Sucrose",
  Galactose = "Galactose",
  Glucose = "Glucose",
  Fructose = "Fructose",
  Lactose = "Lactose",
  Maltose = "Maltose",
  TotalSugars = "Sugars, Total",
  PantothenicAcid = "Pantothenic acid",
  Starch = "Starch",
  VitaminKDihydrophylloquinone = "Vitamin K (Dihydrophylloquinone)",
  VitaminKPhylloquinone = "Vitamin K (phylloquinone)",
  // ... többi érték
  PUFA_22_5_c = "PUFA 22:5 c",
  PUFA_22_6_c = "PUFA 22:6 c",
}

const REQUIRED_NUTRIENTS: object = {
    fat: NUTRIENT_NAME.TotalLipid,
    protein: NUTRIENT_NAME.Protein,
    carbs: NUTRIENT_NAME.CarbohydrateDifference,
}
