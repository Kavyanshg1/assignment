import React from 'react';

import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">Multi-Step Form</h1>
      </header>
      <main className="flex-grow p-4">
        <MultiStepForm />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 Multi-Step Form. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
