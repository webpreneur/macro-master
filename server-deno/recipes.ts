import { Macro } from "./app.ts";
import db from "./db.ts";

console.log("Zöldséges bolognai");
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
  }),
);

console.log("Salika");
console.table(
  Macro.getAggregateMacro({
    db,
    ingredients: [
      { code: 8, weight: 60 },
      { code: 7, weight: 18 },
      { code: 2, weight: 70 },
    ],
    finalWeight: 148,
  }),
);

console.log("Pénteki ebéd");
// 4.757 gramm volt tállal együtt,
//ebből majd le kell vonni a tál tömegét
//és megkapjuk hogy mennyi volt a készétel tömege,
//addig 15%-kos veszteséget veszünk alapul

console.table(
  Macro.getAggregateMacro({
    db,
    ingredients: [
      // sárgarépa
      {
        code: 2,
        weight: 318,
      },
      // citromsárga répa
      {
        code: 10,
        weight: 487,
      },
      // lila répa
      {
        code: 9,
        weight: 241,
      },
      // cukkini
      {
        code: 14,
        weight: 325,
      },
      // karalábé
      {
        code: 1,
        weight: 258,
      },
      // comb
      {
        code: 13,
        weight: 900,
      },
      // zsemlemorzsa
      {
        code: 11,
        weight: 50,
      },
      // sajt
      {
        code: 12,
        weight: 35,
      },
      // pomodoro
      {
        code: 5,
        weight: 515,
      },
    ],
  }),
);

console.log("Zöldségkrémleves");

console.table(
  Macro.getAggregateMacro(
    {
      db,
      ingredients: [
        // vöröshagyma
        {
          code: 4,
          weight: 132,
        },
        // sárgarépa
        {
          code: 2,
          weight: 393,
        },
        // karalábé
        {
          code: 1,
          weight: 316,
        },
        // burgonya
        {
          code: 15,
          weight: 278,
        },
        // karfiol
        {
          code: 16,
          weight: 1400,
        },
        // csapvíz
        {
          code: 17,
          weight: 1750,
        },
        // étolaj
        {
          code: 3,
          weight: 10,
        },
      ],
      finalWeight: 3665,
    },
  ),
);
