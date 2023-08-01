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
  /*   Macro.getAggregateMacro({
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
  }), */
);

console.log("Zöldségkrémleves");

console.table(
  /*   Macro.getAggregateMacro(
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
  ), */
);

console.log("Hétzöldséges kerti pörkölt");

console.table(
  Macro.getAggregateMacro({
    db,
    ingredients: [
      // étolaj
      {
        weight: 20,
        code: 3,
      },
      // vöröshagyma
      {
        weight: 288,
        code: 4,
      },
      // sárgarépa
      {
        weight: 388,
        code: 2,
      },
      // karalábé
      {
        weight: 293,
        code: 1,
      },
      // lila répa
      {
        weight: 306,
        code: 9,
      },
      // borsó
      {
        weight: 280,
        code: 18,
      },
      // kukorica
      {
        weight: 300,
        code: 19,
      },
      // burgonya
      {
        weight: 640,
        code: 15,
      },
      // pomodoro
      {
        weight: 500,
        code: 5,
      },
      // miil olasz kemény sajt
      {
        weight: 30,
        code: 12,
      },
    ],
  }),
);
