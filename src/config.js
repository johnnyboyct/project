

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
      { "role": "Storyteller", "description": "Writing short stories, scripts, or poetry.", sample: "Can you write a short story about a time traveler who accidentally changes history?" },
      { "role": "Designer", "description": "Helping brainstorm visual or architectural ideas.", sample: "Can you help me brainsorm a  futuristic city design" },
      { "role": "Game Master", "description": "Running a tabletop RPG or interactive story.", sample: "Can you help me run a tabletop RPG or interactive story?" }
    ],
    "Educational": [
      { "role": "Tutor", "description": "Explaining concepts in math, science, history, or other subjects.", sample: "Can you explain quantum mechanics like I’m a high school student?" },
      { "role": "Language Coach", "description": "Teaching or practicing a language with you.", sample: "Can you help me practice my spanish?" },
      { "role": "Debate Partner", "description": "Discussing and challenging ideas constructively.", sample: "Can you help me debate the pros and cons of legalizing marijuana?" }
    ],
    "Professional": [
      { "role": "Editor", "description": "Proofreading and refining your documents.", sample: "Can you help me proofread my resume?" },
      { "role": "Consultant", "description": "Offering advice on business, tech, or strategy.", sample: "Can you help me brainstorm ideas for a new business?" },
      { "role": "Project Planner", "description": "Helping you organize tasks and timelines.", sample: "Can you help me organize my tasks for the week?" }
    ],
    "Practical": [
      { "role": "Life Coach", "description": "Offering motivation or advice for personal growth.", sample: "Can you help me stay motivated to learn a new language?" },
      { "role": "Chef’s Assistant", "description": "Suggesting recipes or cooking tips.", sample: "Can you help me find a recipe for a healthy dinner?" },
      { "role": "Fitness Trainer", "description": "Creating exercise plans or answering questions about fitness.", sample: "Can you help me create an exercise plan for the week?" }
    ],
    "Technical": [
      { "role": "Programmer", "description": "Writing or debugging code.", sample: "Can you help me write a nodejs function to calculate the sum of two numbers?" },
      { "role": "Data Analyst", "description": "Helping interpret data or create visualizations.", sample: "Can you help me interpret the data from my survey?" },
      { "role": "Tech Support", "description": "Troubleshooting tech issues or explaining software.", sample: "Can you help me troubleshoot my computer?" }
    ],
    "Entertainment": [
      { "role": "Quiz Master", "description": "Hosting trivia or quizzes.", sample: "Can you help me host a trivia night?" },
      { "role": "Comedian", "description": "Sharing jokes and humorous stories.", sample: "Can you help me share a joke with my friends?" },
      { "role": "Companion", "description": "Casual conversation or even role-playing a character for fun.", sample: "Can you help me role-play a character with me?" }
    ],
    "Miscellaneous": [
      { "role": "Therapist (Not Medical)", "description": "Offering a listening ear and perspective (non-clinical).", sample: "Can you help me talk through my problems?" },
      { "role": "Virtual Historian", "description": "Exploring and discussing historical events or figures.", sample: "Can you help me explore the history of the internet?" },
      { "role": "Innovator", "description": "Brainstorming new ideas for inventions, stories, or solutions.", sample: "Can you help me brainstorm ideas for a new business?" }
    ]
  },
};
