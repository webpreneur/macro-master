import foundation from "./foundationDownload.json" assert { type: "json" };

const foodCategoryDescriptions = new Set<string>();

foundation.FoundationFoods.reduce((acc, curr) => {
    if (curr.foodCategory.description) {
        acc.add(curr.foodCategory.description);
    }
    return acc;
}, foodCategoryDescriptions);

console.log("Number of food categories: ", foodCategoryDescriptions.size);
console.log(Array.from(foodCategoryDescriptions).sort());