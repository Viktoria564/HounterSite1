import { Link } from "react-router-dom";
import HeaderSlider from "../components/HeaderSlider";
import HeaderStyle from "./scss/HeaderStyle.scss";

function Header({ options }) {
  function addToggleClass() {
    document
      .querySelector(".menu__list")
      .classList.toggle("menu__list--active");
    document
      .querySelector(".header__btn")
      .classList.toggle("header__btn--active");
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="menu">
            <Link className="logo-link" to="/">
              <img
                className="menu__logo"
                width={115}
                height={36}
                src={require("../images/logo.png")}
                alt="Logo"
              />
            </Link>
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="#">
                  About Us
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Article
                </a>
              </li>
              <li className="menu__item">
                <div className="menu__select-box">
                  <select className="menu__select">
                    <option className="menu__opion" value="property">
                      Property
                    </option>
                    <option className="menu__opion" value="house">
                      House
                    </option>
                    <option className="menu__opion" value="villa">
                      Villa
                    </option>
                    <option className="menu__opion" value="apartment">
                      Apartment
                    </option>
                  </select>
                </div>
                <a className="header__link" href="#">
                  Sign Up!
                </a>
              </li>
            </ul>
          </nav>
          <button className="header__btn" onClick={addToggleClass}>
            <span className="header__btn-line"></span>
          </button>
        </div>
        <div className="header__content">
          <div className="header__info">
            <span className="header__info-subtitle">
              find the place to live <span>your dreams</span> easily here
            </span>
            <p className="header__info-text text">
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </p>
            <form className="header__info-form">
              <input
                className="header__info-input"
                type="text"
                placeholder="Search for the location you want!"
              />
              <button className="header__info-btn button" type="button">
                Search
              </button>
            </form>
            <span className="header__info-title">Our Partnership </span>
            <ul className="header__info-list">
              <li className="header__info-item">
                <a className="header__info-link" href="#">
                  <img
                    width={82}
                    height={64}
                    src={require("../images/partners/partner-1.png")}
                    alt="Partner Traveloka"
                  />
                </a>
              </li>
              <li className="header__info-item">
                <a className="header__info-link" href="#">
                  <img
                    width={82}
                    height={64}
                    src={require("../images/partners/partner-2.png")}
                    alt="Partner Ticket"
                  />
                </a>
              </li>
              <li className="header__info-item">
                <a className="header__info-link" href="#">
                  <img
                    width={82}
                    height={64}
                    src={require("../images/partners/partner-3.png")}
                    alt="Partner Airbnb"
                  />
                </a>
              </li>
              <li className="header__info-item">
                <a className="header__info-link" href="#">
                  <img
                    width={82}
                    height={64}
                    src={require("../images/partners/partner-4.png")}
                    alt="Partner Tripadvisor"
                  />
                </a>
              </li>
            </ul>
          </div>
          <HeaderSlider />
        </div>
      </div>
    </header>
  );
}

export default Header;
