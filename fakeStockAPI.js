export function fetchStockData() {
  return {
    name: "QtechAI",
    sym: "QTA",
    price: Number((Math.random() * 3).toFixed(2)),
    time: () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      return `${hh}/${mm}/${ss}`;
    },
  };
}
