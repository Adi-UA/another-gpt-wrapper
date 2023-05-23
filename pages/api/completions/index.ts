import { NextApiResponse, NextApiRequest } from "next";
import { ChatCompetionsRequest, ChatCompetionsRequestBody } from "@/interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.COMPLETIONS_MODEL) {
    const requestBody: ChatCompetionsRequestBody = {
      model: process.env.COMPLETIONS_MODEL,
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 50,
    };

    const requestOptions: ChatCompetionsRequest = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        requestOptions
      );
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("A model must be specified for chat completions");
  }
}
