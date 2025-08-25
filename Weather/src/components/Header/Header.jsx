import "./Header.scss";
import { useState } from "react";
import ThemeChangeButton from "./ThemeChangeButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../store/WeatherSlice.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const { city, weather, loading, error } = useSelector((s) => s.weather);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    dispatch(setCity(inputValue));
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__current-location">
          <h1 className="header__location">
            {(loading && "Loading...") || (error && `${error}`)}
            {weather
              ? `${weather.location.name}, ${weather.location.country}`
              : ""}
          </h1>
        </div>
        <div className="header__functions">
          <div className="header__container">
            <div className="header__search-icon" />
            <input
              type="text"
              className="input-field"
              placeholder="Search the city"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
          <ThemeChangeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
