import { Router, send } from "https://deno.land/x/oak@v12.6.0/mod.ts";

import { Macro } from "../app.ts";
import db from "../db.ts";
import { searchFood } from "../src/apis/macro-master/macro-master.api.ts";
import { MacroNutrientInput } from "../types.ts";
import { FoodSearchCriteria } from "../src/apis/usda/schemas/food-search-criteria.ts";
import postFoodsSearch from "../src/apis/usda/api/post-foods-search.ts";
import { SearchResult } from "../src/apis/usda/schemas/search-result.ts";

const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/api/foods", (context) => {
    context.response.status = 200; // HTTP 200 OK státusz kód
    context.response.type = "application/json"; // Válasz MIME típusának beállítása
    context.response.body = db;
  })
  .post("/api/usda/foods/search", async (context) => {
    const body = await context.request.body();

    if (body.type === "json") {
      const requestBody = await body.value as Partial<FoodSearchCriteria>;
      const responseBody: SearchResult = await postFoodsSearch(requestBody);

      context.response.body = responseBody;
    }
  })
  .get("/food/:query", searchFood)
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
