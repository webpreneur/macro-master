import { SearchResultFood } from "../schemas/search-result-food.ts";

/**
 * Sorts an array of SearchResultFood items based on their score.
 * 
 * @param foods - An array of SearchResultFood items to be sorted.
 * @returns - A sorted array of SearchResultFood items.
 */
const sortFoodsByScore = (foods: SearchResultFood[]): SearchResultFood[] => {
    return foods.sort((a, b) => b.score - a.score);
}

export default sortFoodsByScore;