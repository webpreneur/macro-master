import { Router, send } from "https://deno.land/x/oak/mod.ts";
import { searchFood } from "./apis/macro-master/macro-master.api.ts";
import { MacroNutrientInput } from "../types.ts";
import { Macro } from "../app.ts";
import db from "../db.ts";

const router = new Router();

router
  .get("/", async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/src/static`,
      index: "index.html",
    });
  })
  .get("/search", async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/src/static`,
      index: "search.html",
    });
  })
  .get("/food/:query", searchFood)
  .post("/calculate", async (context) => {
    const body = await context.request.body();

    if (body.type === "json") {
      const { finalWeight, ingredients } = await body.value as {ingredients: MacroNutrientInput[];
      finalWeight: number};
      const responseBody = Macro.getAggregateMacro({
        db,
        ingredients,
        finalWeight})

        context.response.body = responseBody;
    }

  });

export default router;
