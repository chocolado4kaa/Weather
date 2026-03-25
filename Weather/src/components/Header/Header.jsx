// components/Header/Header.jsx
import "./Header.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSuggestions,
  setCity,
  fetchWeather,
  clearSuggestions,
} from "../../store/WeatherSlice";
import ThemeChangeButton from "./ThemeChangeButton.jsx";

const Header = () => {
  const dispatch = useDispatch();

  const { weather, suggestions, loading, city } = useSelector(
    (state) => state.weather,
  );

  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim().length > 2) {
        dispatch(fetchSuggestions(inputValue.trim()));
        setShowDropdown(true);
      } else {
        dispatch(clearSuggestions());
        setShowDropdown(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [inputValue, dispatch]);

  useEffect(() => {
    if (!weather) {
      dispatch(fetchWeather("Kyiv"));
    }
  }, [dispatch, weather]);

  const handleSelectCity = (cityObj) => {
    setInputValue("");
    dispatch(setCity(cityObj));
    dispatch(fetchWeather(cityObj.name));
    setShowDropdown(false);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      dispatch(setCity(inputValue.trim()));
      dispatch(fetchWeather(inputValue.trim()));
      setShowDropdown(false);
    }
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__current-location">
          <h1 className="header__location">
            {loading ?
              "Завантаження..."
            : weather?.location ?
              <>
                <span>{weather.location.name}, </span>
                <span>{weather.location.country}</span>
              </>
            : "Виберіть місто"}
          </h1>
        </div>
        <div className="header__functions">
          <div className="header__container">
            <div className="header__search-icon" />
            <input
              type="text"
              className="input-field"
              placeholder="Search the city..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
            />
            {showDropdown && suggestions.length > 0 && (
              <div className="search-dropdown">
                {suggestions.map((cityObj, index) => (
                  <div
                    key={index}
                    className="search-dropdown__item"
                    onClick={() => handleSelectCity(cityObj)}
                  >
                    {cityObj.name}, {cityObj.country}
                  </div>
                ))}
              </div>
            )}
          </div>
          <ThemeChangeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
