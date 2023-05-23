export type SendMessageRequest = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

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

export type Message = { role: string; content: string };

export type Chat = {
  title: string;
  role: string;
  content: string;
};
