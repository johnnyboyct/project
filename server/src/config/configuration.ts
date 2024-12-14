export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  llmStudio: {
    apiKey: process.env.LLM_STUDIO_API_KEY,
    endpoint: process.env.LLM_STUDIO_ENDPOINT || '',
  },
});