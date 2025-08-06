// 代码生成时间: 2025-08-07 05:22:29
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for the component
const propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired
};

// Define a TypeScript type for the component
type ThemeToggleProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeToggleComponent = ({ theme, setTheme }: ThemeToggleProps) => {
  // State to manage the theme
  const [currentTheme, setCurrentTheme] = useState(theme);

  // Event handler to toggle the theme
  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {currentTheme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
    </div>
  );
};

// Set default props and propTypes
ThemeToggleComponent.defaultProps = {
  theme: 'light',
  setTheme: () => {}
};
ThemeToggleComponent.propTypes = propTypes;

export default ThemeToggleComponent;
