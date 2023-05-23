export type ChatCompetionsRequest = {
  method: string;
  headers: {
    Authorization: string;
    "Content-Type": string;
  };
  body: string;
};

export type ChatCompetionsRequestBody = {
  model: string;
  messages: {
    role: string;
    content: string;
  }[];
  max_tokens: number;
};
