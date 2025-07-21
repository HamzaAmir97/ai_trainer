# AI Trainer

AI Trainer is a web application that leverages artificial intelligence to generate personalized workout programs. It features a voice interface for interactive session control and user authentication to manage progress.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-222222?style=for-the-badge&logo=convex&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Google Generative AI](https://img.shields.io/badge/Google%20Generative%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vapi AI](https://img.shields.io/badge/Vapi%20AI-FF6B6B?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## Key Features

- **Personalized Workout Generation:** Creates custom workout plans based on user inputs.
- **Interactive Voice Control:** Uses Vapi for hands-free session management.
- **User Authentication:** Secure login and user management with Clerk.
- **Real-time Database:** Powered by Convex for seamless data synchronization.
- **Modern UI:** Built with Next.js, Tailwind CSS, and Framer Motion for a responsive and engaging user experience.

## Project Structure

```
ai_trainer/
├── convex/           # Convex backend functions and schema
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js App Router pages and layouts
│   ├── components/   # Reusable React components
│   ├── constants/    # Application constants
│   ├── lib/          # Utility functions and libraries
│   ├── middleware.ts # Next.js middleware for authentication
│   └── provider/     # Context providers
├── .env.local        # Environment variables
├── next.config.ts    # Next.js configuration
└── package.json      # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/ai_trainer.git
    cd ai_trainer
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the necessary API keys and environment variables for Clerk, Convex, and Google Generative AI.

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.

## Technologies Used

- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion
- **Backend & Database:** Convex
- **Authentication:** Clerk
- **AI:** Google Generative AI
- **Voice Interface:** Vapi
- **Language:** TypeScript

## Deployment

This application is ready to be deployed on platforms like Vercel or Netlify. Ensure that all environment variables are correctly configured in your deployment provider's settings.
