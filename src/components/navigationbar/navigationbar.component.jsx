import { NavLink, Link } from "react-router-dom";
import "./navigationbar.styles.scss";
import "./mamgologo.png";
import { languagesObj } from "../../languages.component";

const NavigationBar = ({ navigationBarProps, changeLanguageProps }) => {
  return (
    <div className="navigationbar">
      <Link to="/">
        <img
          className="navigationbar-logo"
          src={navigationBarProps.logo}
          alt=""
        />
      </Link>

      <div className="navigationbar-links">
        <h2 className="navigationbar-links-home">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="/"
          >
            {navigationBarProps.link1}
          </NavLink>
        </h2>

        <h2 className="navigationbar-links-casestudy">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="casestudy"
          >
            {navigationBarProps.link2}
          </NavLink>
        </h2>

        <button
          className="navigationbar-links-de"
          onClick={() => changeLanguageProps(languagesObj.de)}
        >
          <h3>{navigationBarProps.lang1}</h3>
        </button>
        <button
          className="navigationbar-links-en"
          onClick={() => changeLanguageProps(languagesObj.en)}
        >
          <h3>{navigationBarProps.lang2}</h3>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
