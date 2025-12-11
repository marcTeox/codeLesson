import OpenAI from "openai";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve(), "public")));

const client = new OpenAI();

app.post("/generate-story", async (req, res) => {
  try {
    const prompt = req.body.prompt || "Tell me a story.";
    console.log("Received prompt:", prompt);
    const response = await client.responses.create({
      model: "gpt-5-nano",
      instructions:
        "Generate a short (around 3 - 5 sentecnes), engaging story based on the user's prompt should be understandable by 10-year-olds.",
      input: prompt,
    });
    res.json({ story: response.output_text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
