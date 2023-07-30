import MacroNutrientDto from "../../../../common/dtos/macro-nutrient.dto.ts";
import queryFood from "../../../integrations/supabase/queries/query-food.ts";

export const searchFood = async (
  { params, response }: { params: Partial<MacroNutrientDto>; response: any },
) => {
  console.log("GET /api/food/:foodId");
  response.body = await queryFood(params);
  return response.body = response;
};
