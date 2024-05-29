import { useEffect, useState } from "react";

const themes: string[] = ["one", "two", "three", "four"];

const ThemeToggleButton = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  useEffect(() => {
    const themeName = themes[themeIndex];

    // Clear all theme classes from the body
    themes.forEach((theme) => {
      document.body.classList.remove(theme);
    });

    // Apply the current theme class to the body
    document.body.classList.add(themeName);
  }, [themeIndex]);

  return (
    <button
      className="mx-3 px-2 py-1 text-white bg-button focus:outline-none rounded w-44"
      onClick={toggleTheme}
    >
      Change Theme({themes[themeIndex]})
    </button>
  );
};

export default ThemeToggleButton;
