import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";

import { Macro } from "../app.ts";
import db from "../db.ts";
import { searchFood } from "../src/apis/macro-master/macro-master.api.ts";
import { MacroNutrientInput } from "../types.ts";
import googleTranslate from "./controllers/google-cloud/translate/translate-controller.ts";
import { usdaSearchFoodGet, usdaSearchFoodPost } from "./controllers/usda/usda-controller-foods-search.ts";

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
  .get("/api/usda/foods/search", usdaSearchFoodGet)  
  .post("/api/usda/foods/search", usdaSearchFoodPost)
  .get("/api/google/translate", googleTranslate)
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
