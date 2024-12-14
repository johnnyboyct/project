import { llmClient } from './llmClient.js';

async function main() {
  try {
    const prompt = "What is the capital of France?";
    console.log('Sending prompt to LLM Studio:', prompt);
    
    const result = await llmClient.generateText(prompt, {
      max_tokens: 100,
      temperature: 0.7,
    });
    
    console.log('Response from LLM Studio:', result);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();