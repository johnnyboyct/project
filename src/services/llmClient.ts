import axios from 'axios';
import { config } from '../config';

class LLMClient {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: config.llmStudioEndpoint,
      headers: {
        'Authorization': `Bearer ${config.llmStudioApiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async generateText(prompt: string, options = {}) {
    try {
      const response = await this.client.post('/generate', {
        prompt,
        ...options,
      });
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(`API Error: ${error.response.data.message || error.response.statusText}`);
      }
      throw new Error(`Network Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

export const llmClient = new LLMClient();