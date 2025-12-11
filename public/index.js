document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("prompt-form");
  const input = document.getElementById("prompt-input");
  const output = document.getElementById("output");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    output.textContent = "Loading...";

    const prompt = input.value;

    try {
      const res = await fetch("http://localhost:3000/api/img-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.error) {
        output.textContent = "Error: " + data.error;
      } else {
        output.textContent = data.output;
      }
    } catch (err) {
      output.textContent = "Request failed: " + err.message;
    }
  });
});
