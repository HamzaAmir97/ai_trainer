# AI Trainer

AI Trainer is a web application that leverages artificial intelligence to generate personalized workout programs. It features a voice interface for interactive session control and user authentication to manage progress.

## 📸 Screenshots

![App Screenshot 1](/public/screenshots/superfitness(1).png)
![App Screenshot 2](/public/screenshots/superfitness(2).png)
![App Screenshot 3](/public/screenshots/superfitness(3).png)


## 📋 Table of Contents

- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [🔋 Features](#-features)
- [🤸 Quick Start](#-quick-start)
- [🚀 Deployment](#-deployment)

## 🤖 Introduction

Create a personalized fitness experience from scratch with AI Trainer! This application features user authentication, AI-powered workout generation, and an interactive voice agent for a seamless, hands-free training session.

## ⚙️ Tech Stack

- **[Next.js](https://nextjs.org/):** A powerful React framework for building fast, scalable web applications with server-side rendering and static site generation.
- **[Convex](https://www.convex.dev/):** A modern backend-as-a-service platform that provides a real-time database, server functions, and file storage.
- **[Clerk](https://clerk.com/):** A unified platform for authentication and user management, offering embeddable UI components and flexible APIs.
- **[Google Generative AI](https://ai.google/):** Powers the intelligent generation of personalized workout plans.
- **[Vapi AI](https://vapi.ai/):** A developer-centric voice AI platform for creating low-latency, conversational voice agents.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom user interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** A superset of JavaScript that adds static typing for better code quality and error detection.

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
