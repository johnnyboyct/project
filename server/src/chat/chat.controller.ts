import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { ChatRequestDto, ChatResponseDto } from './dto';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('message')
  @ApiOperation({ summary: 'Send a message to the LLM' })
  @ApiResponse({ status: 200, type: ChatResponseDto })
  async sendMessage(@Body() chatRequest: ChatRequestDto): Promise<ChatResponseDto> {
    return this.chatService.processMessage(chatRequest);
  }
}