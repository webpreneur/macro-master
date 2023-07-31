import foundation from "./foundationDownload.json" assert { type: "json" };

const foodClasses = new Set<string>();

foundation.FoundationFoods.reduce((acc, curr) => {
    if (curr.foodClass) {
        acc.add(curr.foodClass);
    }
    return acc;
}, foodClasses);

console.log("Number of food classses: ", foodClasses.size);
console.log(Array.from(foodClasses).sort());