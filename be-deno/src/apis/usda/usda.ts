// https://fdc.nal.usda.gov/api-guide.html

import { SearchResult } from "./schemas/search-result.ts";
import { extractUniqueNutrientNames } from "./utils/extract-unique-nutrient-names.ts";
import { filterProperties } from "./utils/filter-properties.ts";
import sort from "./utils/sorty-by-score.ts";

const fetchData = async (query: string) => {
  const API_ENDPOINT = "https://api.nal.usda.gov/fdc/v1/foods/search";
  const API_KEY = "DEMO_KEY"; // Csere a saját kulcsodra, ha van

  const payload = {
    query: query,
    dataType: ["Foundation"],
    sortBy: "fdcId",
    sortOrder: "desc",
  };

  const response = await fetch(API_ENDPOINT + `?api_key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to fetch data");
  }
};

// Példa használatra
fetchData("Purple carrot")
  .then((data: SearchResult) => {
    const sortedFoodsByScore = sort(data.foods);
    const filteredByProps = filterProperties(sortedFoodsByScore);
    console.log(filteredByProps);
    // console.log(extractUniqueNutrientNames(data.foods));
  })
  .catch((error) => console.error(error));
