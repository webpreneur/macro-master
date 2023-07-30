import { FoodSearchCriteria } from "../schemas/food-search-criteria.ts";
import { SearchResult } from "../schemas/search-result.ts";

import config from "../../../config.ts";

const postFoodsSearch = async (payload: Partial<FoodSearchCriteria>): Promise<SearchResult> => {
  const API_ENDPOINT = "https://api.nal.usda.gov/fdc/v1/foods/search";
  const API_KEY = config.USDA_API_KEY;

  if (!API_KEY) {
    throw new Error("USDA API key is missing");
  }

  if (payload.requireAllWords === undefined) {
    payload.requireAllWords = true;
  }
  if (payload.dataType === undefined) {
    payload.dataType = ["Foundation"];
  }

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

export default postFoodsSearch;
