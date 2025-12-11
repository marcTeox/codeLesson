import { dates } from "/utility/dates.js";

const tickersArr = [];

const generateReportBtn = document.querySelector(".generate-report-btn");

generateReportBtn.addEventListener("click", fetchReportData);

document
  .getElementById("ticker-input-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const tickerInput = document.getElementById("ticker-input");
    if (tickerInput.value.trim() > 2) {
      generateReportBtn.disabled = false;
      const newTickerStr = tickerInput.value;
      tickersArr.push(newTickerStr.toUpperCase());
      tickerInput.value = "";
      renderTickers();
    } else {
      const label = document.createElement("label")[0];
      label.style.color = "red";
      label.textContent =
        "You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.";
    }
  });

function renderTickers() {
  const tickersDiv = document.querySelector(".ticker-choice-display");
  tickersDiv.innerHTML = "";
  tickersArr.forEach((ticker) => {
    const newTickerSpan = document.createElement("span");
    newTickerSpan.classList.add("ticker");
    newTickerSpan.textContent = ticker;
    tickersDiv.appendChild(newTickerSpan);
  });
}

const loadingArea = document.querySelector(".loading-panel");
const apiMessage = document.querySelector("#api-message");

async function fetchReportData() {
  document.querySelector(".action-panel").style.display = "none";
  loadingArea.style.display = "flex";
  try {
    const stockData = await Promise.all(
      tickersArr.map(async (ticker) => {
        const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`;
        const response = await fetch(url);
        const data = await response.text();
        const status = await response.status;
        if (status === 200) {
          apiMessage.innerText = "Creaating your report...";
          return data;
        } else {
          loadingArea.innerText =
            "There was an error fetching data. Please check your ticker symbols and try again.";
        }
      })
    );
    fetchRepor(stockData.join(","));
  } catch (error) {
    loadingArea.innerText =
      "There was an error fetching data. Please check your internet connection and try again.";
    console.error("Error fetching data:", error);
  }
}

async function fetchRepor(data) {
  // AI goes here
}

function renderReport(output) {
  loadingArea.style.display = "none";
  const outputArea = document.querySelector(".output-panel");
  const report = document.createElement("p");
  outputArea.appendChild(report);
  report.textContent = output;
  outputArea.style.display = "flex";
}
