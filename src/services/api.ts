import axios from 'axios';

import { config } from '../config';

const api = axios.create({
  baseURL: config.baseAIURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendMessage = async (message: string, role: any) => {
  const prompt = `You are a ${role.role} with the following description: ${role.description}.`;
  const send = {
    model: config.model,
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: message,
      },
    ],

    temperature: 0.7,
    // max_tokens: 50,
    stream: false,
  };
  const response = await api.post(config.completionEndpoint, send);
  return response.data;
};
