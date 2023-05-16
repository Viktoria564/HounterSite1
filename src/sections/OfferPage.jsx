import OfferSlider from "../components/OfferSlider";
import { ReactComponent as HomeSvg } from "../images/icons/icon-home.svg";
import { ReactComponent as VillaSvg } from "../images/icons/icon-villa.svg";
import { ReactComponent as ApartmentSvg } from "../images/icons/icon-apartment.svg";
import { Link, Route, Routes } from "react-router-dom";
import OfferPageStyle from "./scss/OfferPageStyle.scss";
function OfferPage() {
  function changeClass(test) {
    let elem = document.querySelectorAll("#btn");
    elem.forEach((item) => {
      item.classList.remove("offer__btn--active");
    });
    test.classList.add("offer__btn--active");
  }

  return (
    <section className="offer">
      <div className="container">
        <span className="offer__subtitle subtitle">Our Recommendation</span>
        <div className="offer__top">
          <h2 className="offer__title title">Featured House</h2>
          <ul className="offer__list">
            <li className="offer__item">
              <Link to="/">
                <button
                  onClick={(e) => changeClass(e.target)}
                  className="offer__btn offer__btn--active"
                  type="button"
                  id="btn"
                >
                  <HomeSvg className="offer__svg" width={18} height={18} />
                  House
                </button>
              </Link>
            </li>
            <li className="offer__item">
              <Link to="villa">
                <button
                  onClick={(e) => changeClass(e.target)}
                  className="offer__btn"
                  type="button"
                  id="btn"
                >
                  <VillaSvg className="offer__svg" width={18} height={18} />
                  Villa
                </button>
              </Link>
            </li>
            <li className="offer__item">
              <Link to="apartment">
                <button
                  onClick={(e) => changeClass(e.target)}
                  className="offer__btn"
                  type="button"
                  id="btn"
                >
                  <ApartmentSvg className="offer__svg" width={18} height={18} />
                  Apartment
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" exact element={<OfferSlider />}></Route>
        <Route path="villa" exact element={<OfferSlider />}></Route>
        <Route path="apartment" exact element={<OfferSlider />}></Route>
      </Routes>
    </section>
  );
}

export default OfferPage;
