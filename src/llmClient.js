import axios from 'axios';

import { config } from './config.js';

class LLMClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.llmStudioEndpoint,
      headers: {
        'Authorization': `Bearer ${config.llmStudioApiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async generateText(prompt, options = {}) {
    try {
      const response = await this.client.post('/v1/completions', {
        prompt,
        ...options,
      });

      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(`API Error: ${error.response.data.message || error.response.statusText}`);
      }
      throw new Error(`Network Error: ${error.message}`);
    }
  }
}

export const llmClient = new LLMClient();