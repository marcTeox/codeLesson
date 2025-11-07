import { fetchStockData } from "./fakeStockAPI.js";

const data = fetchStockData();
const nameElement = document.querySelector(".techName");
const symElement = document.querySelector(".techSymbol");
const priceElement = document.querySelector(".techPrice");
const timeElement = document.querySelector(".techTime");
let oldPrice = data.price;

nameElement.textContent = `Name: ${data.name}`;
symElement.textContent = `Symbol: ${data.sym}`;

function updatePriceAndTime() {
  const stockData = fetchStockData();
  const newPrice = stockData.price;
  const priceDiff = differenceInPrice(oldPrice, newPrice);
  oldPrice = newPrice;
  let icon = "";
  if (priceDiff > 0) {
    icon = "▲";
  } else if (priceDiff < 0) {
    icon = "▼";
  } else {
    icon = "➡️";
  }
  priceElement.textContent = `Price: $${stockData.price} ${icon}`;
  timeElement.textContent = `Time: ${stockData.time()}`;
}

function differenceInPrice(oldPrice, newPrice) {
  return (newPrice - oldPrice).toFixed(2);
}

setInterval(updatePriceAndTime, 1500);
