import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";

function getPropertyHtml(obj = [placeholderPropertyObj]) {
  let htmlTemplate = "";
  obj.map((property) => {
    let totalSize = property.roomsM2.reduce((acc, curr) => acc + curr, 0);
    htmlTemplate += `
<section class='card'>
  <img src='/images/${property.image}' alt='Property Image' />
  <div class='card-right'>
    <h2>${property.propertyLocation}</h2>
    <h3>£${property.priceGBP}</h3>
    <p>${property.comment}</p>
    <h3>${totalSize}m&sup2;<h3>
  <div>
</section>
  `;
  });
  return htmlTemplate;
}

document.getElementById("container").innerHTML =
  getPropertyHtml(propertyForSaleArr);
