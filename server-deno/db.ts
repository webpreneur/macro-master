import { EncodedMacroNutrients } from "./types.ts";

const encodedMacroNutrients: EncodedMacroNutrients = {
  1: [
    "Karalábé",
    {
      energy: 27,
      protein: 1.7,
      fats: { total: 0.1, saturated: 0.05 },
      carbohydrates: { total: 2.6, sugar: 1.3 },
      salt: 0.01,
    },
  ],
  2: [
    "Sárgarépa",
    {
      energy: 41,
      protein: 0.9,
      fats: { total: 0.2, saturated: 0.1 },
      carbohydrates: { total: 6.8, sugar: 3.4 },
      salt: 0.01,
    },
  ],
  3: [
    "Étolaj",
    {
      energy: 900,
      protein: 0,
      fats: { total: 100, saturated: 15 },
      carbohydrates: { total: 0, sugar: 0 },
      salt: 0,
    },
  ],
  4: [
    "Vöröshagyma",
    {
      energy: 40,
      protein: 1.1,
      fats: { total: 0.1, saturated: 0.05 },
      carbohydrates: { total: 7.6, sugar: 3.8 },
      salt: 0.02,
    },
  ],
  5: [
    "Passata di pomodoro",
    {
      energy: 24,
      protein: 1,
      fats: { total: 0.1, saturated: 0.05 },
      carbohydrates: { total: 4.7, sugar: 2.35 },
      salt: 0.05,
    },
  ],
  6: [
    "Prímhús darált sertéshús 30%",
    {
      energy: 327,
      protein: 15.8,
      fats: { total: 29.2, saturated: 10 },
      carbohydrates: { total: 0.3, sugar: 0.1 },
      salt: 0.5,
    },
  ],
  7: [
    "Dió",
    {
      energy: 654,
      protein: 15.2,
      fats: { total: 62.5, saturated: 6.1 },
      carbohydrates: { total: 6.7, sugar: 2.6 },
      salt: 0,
    },
  ],
  8: [
    "Fitness mix friss salátakeverék",
    {
      energy: 23,
      protein: 1.6,
      fats: { total: 0.3, saturated: 0.1 },
      carbohydrates: { total: 2.9, sugar: 1.3 },
      salt: 0.07,
    },
  ],
  9: [
    "Lila répa",
    {
      energy: 36,
      protein: 1.2,
      fats: { total: 0.1, saturated: 0.05 },
      carbohydrates: { total: 6.8, sugar: 6.8 },
      salt: 0.01,
    },
  ],
  10: [
    "Citromsárga répa",
    {
      energy: 36,
      protein: 1.2,
      fats: { total: 0.1, saturated: 0.05 },
      carbohydrates: { total: 6.8, sugar: 6.8 },
      salt: 0.01,
    },
  ],
  11: [
    "Zsemlemorzsa",
    {
      names: {
        en: "Breadcrumbs",
        hu: "Zsemlemorzsa",
      },
      energy: 360,
      protein: 11,
      fats: { total: 2.5, saturated: 0.5 },
      carbohydrates: { total: 70, sugar: 3.5 },
      salt: 1.5,
    },
  ],
  12: [
    "Miil Olasz kemény sajt",
    {
      energy: 378,
      protein: 31,
      fats: { total: 28, saturated: 20 },
      carbohydrates: { total: 0.6, sugar: 0 },
      salt: 1.4,
    },
  ],
  13: [
    "Sertéscomb",
    {
      energy: 136, // kcal/100g
      protein: 20.5, // g/100g
      fats: {
        total: 5.4,
        saturated: 1.9,
        monounsaturated: 2.4,
        polyunsaturated: 0.6,
      },
      carbohydrates: { total: 0, sugar: 0 }, // g/100g
      fiber: 0, // g/100g
      sodium: 0.055, // g/100g (átváltva mg-ból)
      cholesterol: 68, // mg/100g
      glycemicIndex: "0", // Glikémiás Index értéke
      salt: 0.055, // g/100g (átváltva mg-ból, feltételezve, hogy a só nátriumtartalma az össz nátrium)
    },
  ],
  14: [
    "Cukkini",
    {
      energy: 17, // kcal/100g
      protein: 1.2, // g/100g
      fats: {
        total: 0.3,
        saturated: 0.1,
        monounsaturated: 0,
        polyunsaturated: 0.1,
      },
      carbohydrates: { total: 2.5, sugar: 2.5 }, // g/100g
      salt: 0.02, // g/100g
      fiber: 1, // g/100g
      sodium: 0.008, // g/100g (átváltva mg-ból)
      cholesterol: 0, // mg/100g
      glycemicIndex: "0-55", // Glikémiás Index értéke
    },
  ],
};

export default encodedMacroNutrients;
