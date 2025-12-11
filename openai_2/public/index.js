// index.js
// async function getStory() {
//   try {
//     const response = await fetch("/generate-story", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         prompt: "Write a one-sentence bedtime story about a unicorn.",
//       }),
//     });

//     const data = await response.json();
//     console.log(data);
//     document.getElementById("story").innerText = data.story;
//   } catch (err) {
//     console.error(err);
//     document.getElementById("story").innerText = "Failed to load story.";
//   }
// }

// getStory();

// console.log("frontend JS is running");

const form = document.getElementById("storyForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const prompt = e.target.prompt.value;

  const res = await fetch("/generate-story", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  document.getElementById("story").innerText = data.story;
});
