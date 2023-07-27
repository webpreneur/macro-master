import { Macro } from "./app.ts";
import db from "./db.ts";

console.log('Zöldséges bolognai');
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

console.log('Salika');
console.table(
    Macro.getAggregateMacro({
        db,
        ingredients: [{ code: 8, weight: 60 }, { code: 7, weight: 18 }, { code: 2, weight: 70 }],
        finalWeight: 148,
    }),
);