import foundation from "./foundationDownload.json" assert { type: "json" };

const foundationFoodProps = new Set<string>();


foundation.FoundationFoods.forEach((foodItem) => {
    Object.keys(foodItem).forEach((key) => {
        foundationFoodProps.add(key);
    });
});

console.log("The possible properties of a foundation food: ");
console.log(Array.from(foundationFoodProps).sort());
