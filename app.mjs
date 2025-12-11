import openai from "openai";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve(), "public")));

const client = new openai.OpenAI();
