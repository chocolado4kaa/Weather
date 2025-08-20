import "./Header.scss";
import { useContext, useState } from "react";
import { CityContext } from "../../context/CityContext";
import ThemeChangeButton from "./ThemeChangeButton.jsx";

const Header = () => {
  const { city, setCity, cityData } = useContext(CityContext);
  const [inputValue, setInputValue] = useState(city);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue.trim());
    }
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__current-location">
          <h1 className="header__location">
            {cityData
              ? `${cityData.location.name}, ${cityData.location.country}`
              : ""}
          </h1>
        </div>
        <div className="header__functions">
          <form className="header__container" onSubmit={handleSearch}>
            <div className="header__search-icon" />
            <input
              type="text"
              className="input-field"
              placeholder="Search the city"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
          <ThemeChangeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
