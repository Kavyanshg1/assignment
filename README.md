# assignment
Project Overview

This project is a multi-step form built with Next.js, Tailwind CSS, Zustand/Redux (or Context API), and ShadCN UI. The form supports real-time collaboration, allowing users to fill out information in a seamless and interactive manner. The application features a dark mode toggle, smooth animations, and client-side validation to enhance user experience.

Table of Contents

Technologies Used
Getting Started
Project Structure
Features
Contributing
License
Technologies Used

Next.js: A React framework for building server-rendered applications.
Tailwind CSS: A utility-first CSS framework for styling.
Zustand/Redux (or Context API): State management libraries for managing global state.
ShadCN UI: A component library for building user interfaces.
Framer Motion: A library for animations and transitions.
Getting Started

Prerequisites

Node.js (v14 or later)
npm or yarn
Installation

Clone the repository:

1git clone 
https://github.com/kavyanshg1/assignment

Install dependencies:

1npm install
or
3yarn install

Run the development server:

1npm run dev
or
3yarn dev

Open your browser and navigate to:



1http://localhost:3000
Configuration

Ensure Tailwind CSS is configured for dark mode using the class strategy.
Set up the necessary environment variables if required.
Project Structure


1/multi-step-form
2├── /components         # Reusable components
3├── /pages              # Next.js pages
4├── /public             # Static assets
5├── /styles             # Global styles
6├── /store              # State management (Zustand/Redux)
7└── /utils              # Utility functions
Features

Multi-Step Form: A structured form divided into four steps:

Personal Information : 
Address Details
Preferences
Review & Submit
Real-Time Collaboration: Mock API integration to simulate real-time updates.
State Management: Global state management using Zustand/Redux or Context API.
Client-Side Validation: Real-time validation for form fields.
Animations and Transitions: Smooth transitions between form steps using Framer Motion.
Responsive Design: Fully responsive layout optimized for various devices.
Dark Mode: A toggle to switch between light and dark themes.
Tooltips and Placeholders: Enhanced user guidance for form fields.
Stretch Goals (Optional)

Toast Notifications: User notifications for successful submissions or validation errors.
Accessibility: Compliance with WCAG standards.
Localization: Multi-language support using next-i18next.
Testing: Unit tests for key components using Jest and React Testing Library.
Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.

