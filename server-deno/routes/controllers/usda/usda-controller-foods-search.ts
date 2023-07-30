import postFoodsSearch from "../../../integrations/usda/api/post-foods-search.ts";
import { DataType } from "../../../integrations/usda/schemas/data-type.ts";
import { FoodSearchCriteria } from "../../../integrations/usda/schemas/food-search-criteria.ts";
import { SearchResult } from "../../../integrations/usda/schemas/search-result.ts";
import { SortBy } from "../../../integrations/usda/schemas/sort-by.ts";

export const usdaSearchFoodGet = async (context: any) => {
  const query = context.request.url.searchParams.get("query");
  if (!query) {
    context.response.status = 400;
    context.response.body = { error: "A 'query' paraméter kötelező." };
    return;
  }

  const criteria: Partial<FoodSearchCriteria> = {
    query,
    dataType: context.request.url.searchParams.getAll("dataType") as DataType[],
    pageSize: Number(context.request.url.searchParams.get("pageSize") || 50),
    pageNumber: Number(context.request.url.searchParams.get("pageNumber") || 1),
    sortBy: context.request.url.searchParams.get("sortBy") as SortBy,
    sortOrder: context.request.url.searchParams.get("sortOrder") || undefined,
    brandOwner: context.request.url.searchParams.get("brandOwner") || undefined,
    tradeChannel: context.request.url.searchParams.getAll("tradeChannel"),
    startDate: context.request.url.searchParams.get("startDate") || undefined,
    endDate: context.request.url.searchParams.get("endDate") || undefined,
    requireAllWords:
      context.request.url.searchParams.get("requireAllWords") === "true",
  };

  try {
    const responseBody: SearchResult = await postFoodsSearch(criteria);
    context.response.status = 200;
    context.response.body = responseBody;
  } catch (error) {
    context.response.status = 500;
    context.response.body = { error: error.message };
  }
};

export const usdaSearchFoodPost = async (context: any) => {
  const body = await context.request.body();

  if (body.type === "json") {
    const requestBody = await body.value as Partial<FoodSearchCriteria>;
    const responseBody: SearchResult = await postFoodsSearch(requestBody);

    context.response.body = responseBody;
  }
};
