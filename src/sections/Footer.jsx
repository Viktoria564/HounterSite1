import { Link } from "react-router-dom";
import { ReactComponent as FacebookSvg } from "../images/networks/social-1.svg";
import { ReactComponent as TwitterSvg } from "../images/networks/social-2.svg";
import { ReactComponent as InstagramSvg } from "../images/networks/social-3.svg";
import FooterStyle from "./scss/FooterStyle.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__box-info">
            <Link to="/">
              <img
                className="menu__logo footer__logo"
                width={115}
                height={36}
                src={require("../images/logo.png")}
                alt="Logo"
              />
            </Link>
            <p className="footer__text text">
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </p>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a className="footer__social-link" href="#">
                  <FacebookSvg
                    className="footer__social-img"
                    width={13}
                    height={20}
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#">
                  <TwitterSvg
                    className="footer__social-img"
                    width={24}
                    height={20}
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#">
                  <InstagramSvg
                    className="footer__social-img"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__box-links">
            <ul className="footer__property-list">
              <li className="footer__property-item">
                <h4 className="footer__title">Property</h4>
              </li>
              <li className="footer__property-item">
                <a className="footer__link" href="#">
                  House
                </a>
              </li>
              <li className="footer__property-item">
                <a className="footer__link" href="#">
                  Apartment
                </a>
              </li>
              <li className="footer__property-item">
                <a className="footer__link" href="#">
                  Villa
                </a>
              </li>
            </ul>
            <ul className="footer__article-list">
              <li className="footer__article-item">
                <h4 className="footer__title">Article</h4>
              </li>
              <li className="footer__article-item">
                <a className="footer__link" href="#">
                  New Article
                </a>
              </li>
              <li className="footer__article-item">
                <a className="footer__link" href="#">
                  Popular Article
                </a>
              </li>
              <li className="footer__article-item">
                <a className="footer__link" href="#">
                  Most Read
                </a>
              </li>
              <li className="footer__article-item">
                <a className="footer__link" href="#">
                  Tips & Tricks
                </a>
              </li>
            </ul>
            <address className="address">
              <h4 className="footer__title">Contact</h4>
              <ul className="address__list">
                <li className="address__item">
                  <a className="footer__link" href="#">
                    2464 Royal Ln. Mesa, New Jersey 45463
                  </a>
                </li>
                <li className="address__item">
                  <a className="footer__link" href="tel:6715550110">
                    (671) 555-0110
                  </a>
                </li>
                <li className="address__item">
                  <a className="footer__link" href="mailto:info@hounter.com">
                    info@hounter.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
