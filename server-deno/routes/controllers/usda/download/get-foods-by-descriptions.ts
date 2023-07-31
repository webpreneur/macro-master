import { parse } from "../../../../deps.ts";
import foundation from "./foundationDownload.json" assert { type: "json" };

const flags = parse(Deno.args, {
  string: ["description"],
});

const descriptionFromQuery = flags.description;

if (!descriptionFromQuery) {
  console.log("Please provide a description.");
  Deno.exit(1);
}

console.log("descriptionFromQuery: ", descriptionFromQuery);

// deno run get-foods-by-descriptions.ts --description="carrot"

const results = foundation.FoundationFoods.reduce(
  (acc, { description, nutrientConversionFactors }) => {
    if (typeof description !== "string") {
      console.warn("description is not a string: ", description);
      return acc;
    }
    if (
      description.toLowerCase().includes(descriptionFromQuery.toLowerCase())
    ) {
      const [calorieConversionFactor, proteinConversionFactor] =
        nutrientConversionFactors;

      acc.push({
        description: description,
        calorieConversionFactor,
        proteinConversionFactor,
      });
    }
    return acc;
  },
  []
);

console.log("Number of found items: ", results.length);
console.log(results);
