# AI Trainer

AI Trainer is a web application that leverages artificial intelligence to generate personalized workout programs. It features a voice interface for interactive session control and user authentication to manage progress.

## 📸 Screenshots

<div align="center">
<img src="/public/screenshots/superfitness(1).png" alt="Screenshot 1" width="800"/>
</div>

<table align="center">
  <tr>
    <td><img src="/public/screenshots/superfitness(2).png" alt="Screenshot 2" width="400"/></td>
    <td><img src="/public/screenshots/superfitness(3).png" alt="Screenshot 3" width="400"/></td>
  </tr>
</table>


## 📋 Table of Contents

- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [🔋 Features](#-features)
- [🤸 Quick Start](#-quick-start)
- [🚀 Deployment](#-deployment)

## 🤖 Introduction

Create a personalized fitness experience from scratch with AI Trainer! This application features user authentication, AI-powered workout generation, and an interactive voice agent for a seamless, hands-free training session.

## ⚙️ Tech Stack

<div align="center">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/></a>
  <a href="https://www.convex.dev/" target="_blank"><img src="https://img.shields.io/badge/Convex-222222?style=for-the-badge&logo=convex&logoColor=white" alt="Convex"/></a>
  <a href="https://clerk.com/" target="_blank"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/></a>
  <a href="https://ai.google/" target="_blank"><img src="https://img.shields.io/badge/Google%20Generative%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Generative AI"/></a>
  <a href="https://vapi.ai/" target="_blank"><img src="https://img.shields.io/badge/Vapi%20AI-FF6B6B?style=for-the-badge" alt="Vapi AI"/></a>
  <a href="https://tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
</div>

## 🔋 Features

- **🤖 AI-Powered Workouts:** Generate custom workout programs based on user goals and preferences.
- **🗣️ Interactive Voice Control:** Use your voice to start, stop, and navigate through your workout sessions.
- **🔐 Secure Authentication:** Easy sign-up and sign-in with Clerk, supporting various social providers.
- **⚡ Real-time Database:** Seamless data handling and synchronization with Convex.
- **📱 Responsive Design:** A clean, modern UI built with Tailwind CSS that works on any device.
- **🛠️ Modular Codebase:** Reusable components and a clear structure for efficient development.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:
- Git
- Node.js (v20 or later)
- npm (Node Package Manager)

**1. Clone the Repository**

```bash
git clone https://github.com/HamzaAmir97/ai_trainer
cd ai_trainer
```

**2. Install Dependencies**

```bash
npm install
```

**3. Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add your credentials for the following services:

```
# Convex
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Google Generative AI
GOOGLE_API_KEY=

# Vapi
NEXT_PUBLIC_VAPI_PUBLIC_KEY=
```

**4. Run the Project**

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.

## 🚀 Deployment

This application is ready to be deployed on platforms like Vercel or Netlify. Ensure that all environment variables from your `.env.local` file are correctly configured in your deployment provider's settings.
