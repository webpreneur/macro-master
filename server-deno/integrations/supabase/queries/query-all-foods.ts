import { QueryObjectOptions } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { QueryObjectResult } from "https://deno.land/x/postgres@v0.17.0/query/query.ts";

import MacroNutrientDto from "../../../../common/dtos/macro-nutrient.dto.ts";
import pool from "../pool.ts";

const queryAllFoods = async (): Promise<
  QueryObjectResult<MacroNutrientDto> | null
> => {
  const text = "SELECT * FROM MacroNutrients";
  const config: QueryObjectOptions = {
    text,
    camelcase: true,
  };
  const client = await pool.connect();

  try {
    return await client.queryObject(config);
  } catch (error) {
    console.error("Error querying foods:", error);
    return null;
  } finally {
    client.release();
  }
};

export default queryAllFoods;
