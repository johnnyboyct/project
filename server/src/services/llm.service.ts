import axios from 'axios';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LlmService {
  private readonly client;

  constructor(private configService: ConfigService) {
    this.client = axios.create({
      baseURL: this.configService.get<string>('llmStudio.endpoint'),
      headers: {
        'Authorization': `Bearer ${this.configService.get<string>('llmStudio.apiKey')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async generateText(prompt: string, options = {}) {
    try {
      const response = await this.client.post('//v1/completions', {
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