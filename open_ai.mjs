import OpenAI from "openai";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve(), "public")));

const openai = new OpenAI();

app.post("/api/img-generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input:
        prompt ||
        "Generate an image of gray tabby cat hugging an otter with an orange scarf",
      tools: [{ type: "image_generation" }],
    });

    const imageData = response.output
      .filter((output) => output.type === "image_generation_call")
      .map((output) => output.result);

    if (imageData.length > 0) {
      const imageBase64 = imageData[0];
      const fs = await import("fs");
      fs.writeFileSync("cat_and_otter.png", Buffer.from(imageBase64, "base64"));
    }
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
