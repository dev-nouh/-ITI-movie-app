import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  maxRetries: 0,
});

export async function askGemini(message) {
  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: message,
  });

  return interaction.output_text;
}