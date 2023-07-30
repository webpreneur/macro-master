// https://fdc.nal.usda.gov/api-guide.html

import postFoodsSearch from "./api/post-foods-search.ts";
import { SearchResult } from "./schemas/search-result.ts";
import { filterProperties } from "./utils/filter-properties.ts";
import sortByScore from "./utils/sorty-by-score.ts";

// Példa használatra
postFoodsSearch({
  query: "Purple Carrot",
})
  .then((data: SearchResult) => {
    const sortedFoodsByScore = sortByScore(data.foods);
    const filteredByProps = filterProperties(sortedFoodsByScore);
    console.log(filteredByProps);
    // console.log(extractUniqueNutrientNames(data.foods));
  })
  .catch((error) => console.error(error));
