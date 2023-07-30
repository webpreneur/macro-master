import { Router } from "../deps.ts";

import { Macro } from "../app.ts";
import db from "../db.ts";
import { searchFood } from "../src/apis/macro-master/macro-master.api.ts";
import { MacroNutrientInput } from "../types.ts";
import googleTranslate from "./controllers/google-cloud/translate/translate-controller.ts";
import {
  usdaSearchFoodGet,
  usdaSearchFoodPost,
} from "./controllers/usda/usda-controller-foods-search.ts";
import { getAllFoods } from "./controllers/food/food-controller.ts";

const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  // .get("/api/food", searchFood)
  .get("/api/foods", getAllFoods)
  .get("/api/usda/foods/search", usdaSearchFoodGet)
  .post("/api/usda/foods/search", usdaSearchFoodPost)
  .get("/api/google/translate", googleTranslate)
  .post("/calculate", async (context) => {
    const body = await context.request.body();

    if (body.type === "json") {
      const { finalWeight, ingredients } = await body.value as {
        ingredients: MacroNutrientInput[];
        finalWeight: number;
      };
      const responseBody = Macro.getAggregateMacro({
        db,
        ingredients,
        finalWeight,
      });

      context.response.body = responseBody;
    }
  });

export default router;
