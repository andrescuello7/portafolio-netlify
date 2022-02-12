import { useState } from "react";

const HomeController = () => {
  const [title, setTitle] = useState("Hola Mundaso");
  const [background, setBackground] = useState(false);
  const [themeState, setThemeState] = useState("theme_white");
  const theme = () => {
    if (background === true) {
      setThemeState("theme_white");
    } else {
      setThemeState("theme_dark");
    }
    setBackground(!background);
    console.log(themeState);
  };
  return {
    themeState,
    setTitle,
    theme,
    title,
  };
};

export default HomeController;
