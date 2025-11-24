import { GoogleGenAI } from "@google/genai";

// In a real environment, this would be populated. 
// For this demo, we handle the case where it might be missing gracefully in the component.
const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateJungleWhisper = async (): Promise<string> => {
  if (!ai) {
    // Fallback if API key is not set, to ensure the UI still works beautifully for the demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("The forest does not shout; it waits for you to listen.");
      }, 1000);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a short, poetic, and profound single-sentence insight about the Indian wilderness, sustainability, or the silence of nature. Tone: Mystical, elegant, serene. Max words: 20. Do not use quotes.",
    });
    return response.text || "Nature's silence is the loudest answer.";
  } catch (error) {
    console.error("Error fetching whisper:", error);
    return "Where the wild things are, the soul finds its home.";
  }
};