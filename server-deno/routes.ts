import { Router, send } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { Macro } from "./app.ts";
import db from "./db.ts";
import { searchFood } from "./src/apis/macro-master/macro-master.api.ts";
import { MacroNutrientInput } from "./types.ts";


const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/search", async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/static`,
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
