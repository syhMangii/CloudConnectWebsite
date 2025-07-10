# Project: Cloud Connect Website Duplication

## Goal

The primary goal is to fully duplicate the "Cloud Connect" website. This includes replicating its visual design, interactive components, and overall structure. The duplicated website will be built using Vue.js for the frontend framework and Tailwind CSS for styling.

## Context

This project aims to recreate an existing website, "Cloud Connect". I will provide screenshots of the website's various sections and components. Your task, as the Gemini CLI agent, is to generate the Vue.js components and layout, along with the necessary Tailwind CSS classes, to match the provided designs as closely as possible.

**Website Overview:**
The Cloud Connect website provides general information about Cloud Connect services and offerings. It likely includes sections such as:
* **Header/Navigation:** Logo, navigation links (Home, Services, About Us, Contact, etc.), potentially a "Get Started" or "Login" button.
* **Hero Section:** A prominent introductory section with a catchy headline, sub-headline, and call-to-action button.
* **Services Section:** Cards or blocks detailing various cloud services offered.
* **Features/Benefits Section:** Highlights key advantages or features of Cloud Connect.
* **Testimonials Section:** Customer reviews or endorsements.
* **Pricing Section (optional):** Different service tiers and their costs.
* **About Us Section:** Information about the company, its mission, and values.
* **Contact Us Section:** A form or contact details.
* **Footer:** Copyright information, quick links, social media icons.

## Technology Stack

* **Frontend Framework:** Vue.js (latest stable version recommended, e.g., Vue 3 with Vite)
* **CSS Framework:** Tailwind CSS

## Project Structure (Expected Output)

You will generate the following file and folder structure. Please ensure all files are correctly placed within this structure.

CloudConnectWebsite/
├── public/
│   └── index.html  # Main HTML file for the Vue app
├── src/
│   ├── assets/       # Static assets like images, icons, fonts
│   │   └── images/
│   ├── components/   # Reusable Vue components (e.g., Button.vue, Card.vue, Navbar.vue, Footer.vue)
│   ├── views/        # Vue components representing full pages/sections (e.g., Home.vue, Services.vue, About.vue)
│   ├── App.vue       # Main Vue component
│   ├── main.js       # Vue app entry point
│   ├── style.css     # Main CSS file for Tailwind directives
│   └── router/       # Vue Router configuration (if multi-page)
│       └── index.js
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration (used by Tailwind)
├── vite.config.js     # Vite configuration (for Vue 3)
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation

## Detailed Instructions for Generation

For each prompt, I will provide the relevant screenshot(s) and specific design requirements. Your task is to:

1.  **Analyze the Screenshot:** Identify distinct UI elements, their layout, colors, typography, spacing, and responsiveness (if implied).
2.  **Break Down into Components:** Determine which parts can be standalone Vue components (e.g., a button, a card) and which are full page layouts or sections.
3.  **Generate Vue Components:** For each identified component, create a `.vue` file with:
    * `<template>`: Semantic HTML structure with Tailwind CSS classes applied directly.
    * `<script setup>`: (For Vue 3 Composition API) Any necessary component logic (props, data, methods).
    * `<style scoped>`: Minimal custom CSS if absolutely necessary (prefer Tailwind utilities).
4.  **Integrate Components into Views/Layouts:** Assemble the smaller components into larger "view" components (pages) as per the overall website layout.
5.  **Configure Tailwind CSS:** Ensure `tailwind.config.js` is set up correctly to purge unused CSS and extend default themes as needed (e.g., custom colors, fonts).
6.  **Setup Vue Router (if necessary):** Create basic routing if the website has multiple distinct pages.
7.  **Provide Setup Instructions:** Include instructions for initializing the project, installing dependencies, and running the development server.

