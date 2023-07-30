import { RouterContext } from "https://deno.land/x/oak@v12.6.0/router.ts";
import queryAllFoods from "../../../integrations/supabase/queries/query-all-foods.ts";

export const getAllFoods = async (context: RouterContext<any>) => {
  console.log("GET /api/foods");
  context.response.status = 200;
  context.response.type = "application/json";
  const foods = await queryAllFoods();
  context.response.body = foods;
};
