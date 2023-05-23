const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.post("/completions", async (_req, res) => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "how are you" }],
        max_tokens: 100,
      }),
    };
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log("Your server is running! Wohoo!"));