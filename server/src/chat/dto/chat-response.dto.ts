import { ApiProperty } from '@nestjs/swagger';

export class ChatResponseDto {
  @ApiProperty({
    description: 'The response message from the LLM',
    example: 'The capital of France is Paris.',
  })
  message: string;

  @ApiProperty({
    description: 'Timestamp of the response',
    example: '2023-11-15T12:00:00Z',
  })
  timestamp: string;
}