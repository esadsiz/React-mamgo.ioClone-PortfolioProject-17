import { NavLink, Link } from "react-router-dom";
import "./navigationbar.styles.scss";
import "./mamgologo.png";

const NavigationBar = ({ navigationBarProps }) => {
  return (
    <div className="navigationbar">
      <Link to="home">
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

        <h2 className="navigationbar-links-career">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            to="career"
          >
            {navigationBarProps.link3}
          </NavLink>
        </h2>

        <a href="">
          <h3 className="navigationbar-links-de">{navigationBarProps.lang1}</h3>
        </a>
        <a href="">
          <h3 className="navigationbar-links-en">{navigationBarProps.lang2}</h3>
        </a>
        <a className="navigationbar-links-button" href="">
          <h1> {navigationBarProps.buttontext}</h1>
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
