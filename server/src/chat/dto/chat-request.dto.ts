import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChatRequestDto {
  @ApiProperty({
    description: 'The message to send to the LLM',
    example: 'What is the capital of France?',
  })
  @IsString()
  @IsNotEmpty()
  message: string;
}