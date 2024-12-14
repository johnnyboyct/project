import { Injectable } from '@nestjs/common';
import { LlmService } from '../services/llm.service';
import { ChatRequestDto, ChatResponseDto } from './dto';

@Injectable()
export class ChatService {
  constructor(private readonly llmService: LlmService) {}

  async processMessage(chatRequest: ChatRequestDto): Promise<ChatResponseDto> {
    const llmResponse = await this.llmService.generateText(chatRequest.message);
    
    return {
      message: llmResponse.text,
      timestamp: new Date().toISOString(),
    };
  }
}