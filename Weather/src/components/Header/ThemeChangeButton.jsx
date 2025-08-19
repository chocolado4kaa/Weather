import "./Header.scss";
import { useState, useEffect } from "react";

const ThemeChangeButton = () => {

    const [theme, setTheme] = useState("dark");

    useEffect(() => { 
        document.body.setAttribute("data-theme", theme);
    }, [theme]); 

    const changeTheme = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    }

  return (
    <button
      className={`header__button header__container ${theme}`}
      onClick={() => changeTheme()}
    ></button>
  );
};

export default ThemeChangeButton;
