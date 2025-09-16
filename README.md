# 🌟 Personal Portfolio & Blog

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Mantine](https://img.shields.io/badge/Mantine-339AF0?style=for-the-badge&logo=react&logoColor=white)](https://mantine.dev/)
[![microCMS](https://img.shields.io/badge/microCMS-00B7C3?style=for-the-badge&logo=datadog&logoColor=white)](https://microcms.io/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=meowmomo)](https://meowmomo.vercel.app)
[![Portfolio](https://img.shields.io/badge/Visit-Portfolio-000?style=for-the-badge&logo=vercel&logoColor=white)](https://meowmomo.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Welcome to the repository of my **portfolio website**, a space where I share my projects, blog articles, and developer journey.  
This site was built to **showcase my skills as a full-stack developer**, experiment with modern web technologies, and create a clean experience for visitors.

---

## 🧑‍💻 About the Project

This portfolio serves three main purposes:

- **Showcase Projects** – A place to highlight personal and professional work.
- **Share Knowledge** – A blog where I write about workflows, design patterns, and development insights.
- **Experimentation Ground** – A live playground to try out modern frameworks, UI libraries, and best practices.

I designed this project to be **scalable, maintainable, and recruiter-friendly**, reflecting how I’d approach building professional software.

---

## ✨ Features

- ⚡ **Next.js (App Router)** – Server-side rendering, static generation, and route-based components
- 🎨 **Custom Theming** – Light/Dark mode with SCSS variables + Tailwind utilities
- 📰 **Blog System** – Supports tagging, filtering, sorting (newest/oldest/shuffle)
- 📂 **Projects Page** – Displays portfolio projects with filtering & pagination
- 🛠️ **Reusable Components** – Shared UI like paginator, tag menu, and sort controls
- 🌍 **Multilingual Ready** – Support for Japanese & English content
- 📱 **Responsive Design** – Works seamlessly across desktop and mobile

---

## 📂 Project Structure

```bash
src/
├── app/                 # Next.js app router
│   ├── blog/            # Blog pages, tags, and components
│   ├── project/         # Project pages, tags, and project.json data
│   ├── home/            # Homepage components
│   └── layout/          # Shared layouts
├── components/          # Global reusable components (Paginator, TagMenu, etc.)
├── hooks/               # Custom React hooks
├── icons/               # Custom icon components
├── libs/                # Utility libraries/helpers
├── styles/              # Tailwind + SCSS styling
├── types/               # TypeScript type definitions
└── public/              # Static assets (images, icons, etc.)
```

This structure is designed for clarity, reusability, and growth.

---

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/meowmomo/dev-portfolio.git
cd dev-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a .env.local file with your CMS keys (if using microCMS or similar):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
MICROCMS_API_KEY=your_api_key
MICROCMS_SERVICE_DOMAIN=your_service_domain
```

4. Run the development server

```bash
npm run dev
```

Visit 👉 http://localhost:3000

---

## 🛠️ Tech Stack

Next.js
– React framework with App Router

TypeScript
– Type safety & maintainability

Mantine
– Modern React component library

Tailwind CSS
– Utility-first CSS framework

SCSS
– Structured styling

microCMS
– Headless CMS for blog content

Vercel
– Hosting and deployment

---

## 📌 What I Learned

Structuring a scalable Next.js project with the App Router

Building reusable UI components for pagination, sorting, and filtering

Handling content-driven sites using a headless CMS

Balancing design systems (Mantine, Tailwind, SCSS)

Creating a smooth developer experience with ESLint, Prettier, and TypeScript

---

## 🎯 Roadmap

Add full-text search for blog posts and projects

Improve SEO optimization (meta tags, sitemap, Open Graph)

Add unit tests with Jest & React Testing Library

Experiment with animations using Framer Motion

Expand multilingual support beyond Japanese/English

---

## 👤 About Me

Hi, I’m momo – a developer passionate about:

🖥️ Web Development (React, Next.js, TypeScript)

🎨 UI/UX Design (atomic design, accessibility, usability)

⚡ Performance & Workflows (tooling, productivity, automation)

👉 This portfolio reflects how I approach building real-world, professional-quality apps.

🌐 Portfolio: [meowmomo.vercel.app](https://meowmomo.vercel.app/home)

💻 GitHub: [@meowmomo](https://github.com/meowmomo)

---

## 📄 License

This project is open source under the MIT License.

⚡ Built with passion, learning, and a love for clean design.
