import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import OfferSliderStyle from "./OfferSliderStyle.scss";
function OfferSlider() {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  return (
    <div className="offer__slider">
      <Slider {...settings}>
        <div className="offer__slide">
          <img
            className="offer__slide-img"
            src={require("../images/products/product-1.jpg")}
            alt="Building"
          />
          <span className="offer__slide-category offer__slide-category--fire">
            Popular
          </span>
          <h3 className="offer__slide-title">Roselands House</h3>
          <span className="offer__slide-price">$ 35.000.000</span>
          <div className="offer__box">
            <img
              className="offer__box-img"
              src={require("../images/owners/owner-1.png")}
              alt="Owner photo"
            />
            <div className="offer__box-info">
              <span className="offer__box-name">Dianne Russell</span>
              <span className="offer__box-location">Manchester, Kentucky</span>
            </div>
          </div>
        </div>
        <div className="offer__slide">
          <img
            className="offer__slide-img"
            src={require("../images/products/product-2.jpg")}
            alt="Building"
          />
          <span className="offer__slide-category offer__slide-category--home">
            New house
          </span>
          <h3 className="offer__slide-title">Woodlandside</h3>
          <span className="offer__slide-price">$ 20.000.000</span>
          <div className="offer__box">
            <img
              className="offer__box-img"
              src={require("../images/owners/owner-2.png")}
              alt="Owner photo"
            />
            <div className="offer__box-info">
              <span className="offer__box-name">Robert Fox</span>
              <span className="offer__box-location">
                Dr. San Jose, South Dakota
              </span>
            </div>
          </div>
        </div>
        <div className="offer__slide">
          <img
            className="offer__slide-img"
            src={require("../images/products/product-3.jpg")}
            alt="Building"
          />
          <span className="offer__slide-category offer__slide-category--belt">
            Best Deals
          </span>
          <h3 className="offer__slide-title">The Old Lighthouse</h3>
          <span className="offer__slide-price">$ 44.000.000</span>
          <div className="offer__box">
            <img
              className="offer__box-img"
              src={require("../images/owners/owner-3.png")}
              alt="Owner photo"
            />
            <div className="offer__box-info">
              <span className="offer__box-name">Ronald Richards</span>
              <span className="offer__box-location">Santa Ana, Illinois</span>
            </div>
          </div>
        </div>
        <div className="offer__slide">
          <img
            className="offer__slide-img"
            src={require("../images/products/product-2.jpg")}
            alt="Building"
          />
          <span className="offer__slide-category offer__slide-category--fire">
            Popular
          </span>
          <h3 className="offer__slide-title">Cosmo's House</h3>
          <span className="offer__slide-price">$ 35.000.000</span>
          <div className="offer__box">
            <img
              className="offer__box-img"
              src={require("../images/owners/owner-4.png")}
              alt="Owner photo"
            />
            <div className="offer__box-info">
              <span className="offer__box-name">Jenny Wilson</span>
              <span className="offer__box-location">
                Preston Rd. Inglewood, Maine 98380
              </span>
            </div>
          </div>
        </div>
        <div className="offer__slide">
          <img
            className="offer__slide-img"
            src={require("../images/products/product-1.jpg")}
            alt="Building"
          />
          <span className="offer__slide-category offer__slide-category--home">
            Popular
          </span>
          <h3 className="offer__slide-title">Roselands House</h3>
          <span className="offer__slide-price">$ 35.000.000</span>
          <div className="offer__box">
            <img
              className="offer__box-img"
              src={require("../images/owners/owner-1.png")}
              alt="Owner photo"
            />
            <div className="offer__box-info">
              <span className="offer__box-name">Dianne Russell</span>
              <span className="offer__box-location">Manchester, Kentucky</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OfferSlider;
