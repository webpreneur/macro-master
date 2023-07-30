import { QueryObjectOptions } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { QueryObjectResult } from "https://deno.land/x/postgres@v0.17.0/query/query.ts";

import MacroNutrientDto from "../../../../common/dtos/macro-nutrient.dto.ts";
import pool from "../pool.ts";

const queryFood = async (searchParams: Partial<MacroNutrientDto>): Promise<
  QueryObjectResult<MacroNutrientDto> | null
> => {
  const text = _generateQuery(searchParams)
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

function _generateQuery(params: Partial<MacroNutrientDto>): string {
  const baseQuery = "SELECT * FROM MacroNutrients";

  if (!params || Object.keys(params).length === 0) {
    return baseQuery;
  }

  const conditions = Object.entries(params)
    .map(([key, value]) => `${key} = '${value}'`)
    .join(" AND ");

  return `${baseQuery} WHERE ${conditions}`;
}

export default queryFood;
