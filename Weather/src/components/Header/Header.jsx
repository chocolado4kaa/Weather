import "./Header.scss";
import ThemeChangeButton from "./ThemeChangeButton.jsx";
import SearchIcon from "./search.svg?react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__current-location">
          <h1 className="header__location">Vinnytsia, Ukraine</h1>
        </div>
        <div className="header__functions">
          <div className="header__container">
            <SearchIcon className="header__search-icon" />
            <input
              type="text"
              className="input-field"
              placeholder="Search the city"
            />
          </div>
          <ThemeChangeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

