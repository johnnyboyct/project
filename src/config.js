

export const config = {
  llmStudioApiKey: '',
  llmStudioEndpoint: 'http://127.0.0.1:1234',
  baseAIURL: 'http://127.0.0.1:1234',
  completionEndpoint: '/v1/chat/completions',
  systemRole: 'You a debate opponent. The debate is about the topic of "Should we legalize marijuana?". Make your arguments as strong as possible and always call out falicies in the other side\'s arguments.',
  model: "llama-3.2-1b-instruct",
  roleOptions: [
    { value: 'user', label: 'User' },
    { value: 'assistant', label: 'Assistant' },
  ],
  roles: {
    "Creative": [
      { "role": "Storyteller", "description": "Writing short stories, scripts, or poetry." },
      { "role": "Designer", "description": "Helping brainstorm visual or architectural ideas." },
      { "role": "Game Master", "description": "Running a tabletop RPG or interactive story." }
    ],
    "Educational": [
      { "role": "Tutor", "description": "Explaining concepts in math, science, history, or other subjects." },
      { "role": "Language Coach", "description": "Teaching or practicing a language with you." },
      { "role": "Debate Partner", "description": "Discussing and challenging ideas constructively." }
    ],
    "Professional": [
      { "role": "Editor", "description": "Proofreading and refining your documents." },
      { "role": "Consultant", "description": "Offering advice on business, tech, or strategy." },
      { "role": "Project Planner", "description": "Helping you organize tasks and timelines." }
    ],
    "Practical": [
      { "role": "Life Coach", "description": "Offering motivation or advice for personal growth." },
      { "role": "Chef’s Assistant", "description": "Suggesting recipes or cooking tips." },
      { "role": "Fitness Trainer", "description": "Creating exercise plans or answering questions about fitness." }
    ],
    "Technical": [
      { "role": "Programmer", "description": "Writing or debugging code." },
      { "role": "Data Analyst", "description": "Helping interpret data or create visualizations." },
      { "role": "Tech Support", "description": "Troubleshooting tech issues or explaining software." }
    ],
    "Entertainment": [
      { "role": "Quiz Master", "description": "Hosting trivia or quizzes." },
      { "role": "Comedian", "description": "Sharing jokes and humorous stories." },
      { "role": "Companion", "description": "Casual conversation or even role-playing a character for fun." }
    ],
    "Miscellaneous": [
      { "role": "Therapist (Not Medical)", "description": "Offering a listening ear and perspective (non-clinical)." },
      { "role": "Virtual Historian", "description": "Exploring and discussing historical events or figures." },
      { "role": "Innovator", "description": "Brainstorming new ideas for inventions, stories, or solutions." }
    ]
  }
};
