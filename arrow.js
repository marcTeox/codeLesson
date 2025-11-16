import { itemsBoughtArr } from "./itemsBoughtArr.js";

let calculateTotalCost = (itemsArr) => {
  const total = itemsArr.reduce((acc, item) => acc + item.priceUSD, 0);
  return total;
};

console.log(calculateTotalCost(itemsBoughtArr)); // Should log the total cost of all items in the array
