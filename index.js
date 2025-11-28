try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Holiday Nightmare",
      bnody: "When I was kidnapped in Scotland...",
      userId: 1,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log("Error:", error);
} finally {
  console.log("Fetch attempt completed.");
}
