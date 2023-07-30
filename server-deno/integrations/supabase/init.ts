
import { PoolClient } from "../../deps.ts";

import encodedMacroNutrients from "../../db.ts";

const init = async (connection: PoolClient) => {
  try {
    // Create the table
    await connection.queryObject`
      CREATE TABLE IF NOT EXISTS MacroNutrients (
        nutrient_id SERIAL PRIMARY KEY,
        name_en TEXT,
        name_hu TEXT,
        energy REAL,
        protein REAL,
        total_fats REAL,
        saturated_fats REAL,
        monounsaturated_fats REAL,
        polyunsaturated_fats REAL,
        total_carbohydrates REAL,
        sugar REAL,
        fiber REAL,
        sodium REAL,
        cholesterol REAL,
        glycemic_index TEXT,
        salt REAL
      )
    `;

    for (const [, [name, macro]] of Object.entries(encodedMacroNutrients)) {
      await connection.queryObject`
          INSERT INTO MacroNutrients (name_en, name_hu, energy, protein, total_fats, saturated_fats, monounsaturated_fats, polyunsaturated_fats, total_carbohydrates, sugar, fiber, sodium, cholesterol, glycemic_index, salt)
          VALUES (
              ${macro.names?.en}, 
              ${name}, 
              ${macro.energy},
              ${macro.protein},
              ${macro.fats.total},
              ${macro.fats.saturated},
              ${macro.fats.monounsaturated},
              ${macro.fats.polyunsaturated},
              ${macro.carbohydrates.total},
              ${macro.carbohydrates.sugar},
              ${macro.fiber},
              ${macro.sodium},
              ${macro.cholesterol}, 
              ${macro.glycemicIndex},
              ${macro.salt}
          )
      `;
    }
  } catch (error) {
    console.error(error);
  }

  return Promise.resolve("Database initialized");
};

export default init;
