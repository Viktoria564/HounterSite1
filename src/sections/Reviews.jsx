import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RewievsStyle from "./scss/RewievsStyle.scss";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="reviews">
      <span className="reviews__subtitle subtitle">See Our Review</span>
      <h2 className="reviews__title title">What Our User Say About Us</h2>
      <div className="reviews__slider">
        <Slider {...settings}>
          <div className="reviews__item">
            <img
              className="reviews__img"
              width={740}
              height={400}
              src={require("../images/gallery/img-5.png")}
              alt="Building"
            />
            <div className="reviews__box">
              <h3 className="reviews__box-title">
                Best! I got the house I wanted through Hounter
              </h3>
              <p className="reviews__box-text">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
              <div className="reviews__box-person">
                <div className="reviews__box-info">
                  <img
                    width={40}
                    height={40}
                    className="reviews__box-img"
                    src={require("../images/owners/owner-1.png")}
                    alt="Reviewer photo"
                  />
                  <span className="reviews__box-name">
                    Dianne Russell
                    <span className="reviews__box-position">
                      Manager Director
                    </span>
                  </span>
                </div>
                <span className="reviews__box-score">4.6</span>
              </div>
            </div>
          </div>
          <div className="reviews__item">
            <img
              className="reviews__img"
              width={740}
              height={400}
              src={require("../images/gallery/img-5.png")}
              alt="Building"
            />
            <div className="reviews__box">
              <h3 className="reviews__box-title">
                Through the Hounter, I can get a house for my self
              </h3>
              <p className="reviews__box-text">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
              <div className="reviews__box-person">
                <div className="reviews__box-info">
                  <img
                    width={40}
                    height={40}
                    className="reviews__box-img"
                    src={require("../images/owners/owner-4.png")}
                    alt="Reviewer photo"
                  />
                  <span className="reviews__box-name">
                    Esther Howard
                    <span className="reviews__box-position">
                      Head of Marketing
                    </span>
                  </span>
                </div>
                <span className="reviews__box-score">4.5</span>
              </div>
            </div>
          </div>
          <div className="reviews__item">
            <img
              className="reviews__img"
              width={740}
              height={400}
              src={require("../images/gallery/img-5.png")}
              alt="Building"
            />
            <div className="reviews__box">
              <h3 className="reviews__box-title">My house sold out fast!</h3>
              <p className="reviews__box-text text">
                I was finally able to sell my house quickly through Hounter by
                immediately setting me up with people who wanted my house. I
                also do not get a discount from the sale of my house. Awesome!
              </p>
              <div className="reviews__box-person">
                <div className="reviews__box-info">
                  <img
                    width={40}
                    height={40}
                    className="reviews__box-img"
                    src={require("../images/owners/owner-3.png")}
                    alt="Reviewer photo"
                  />
                  <span className="reviews__box-name">
                    Courtney Henry{" "}
                    <span className="reviews__box-position">
                      CEO Andarafish
                    </span>
                  </span>
                </div>
                <span className="reviews__box-score">4.3</span>
              </div>
            </div>
          </div>
          <div className="reviews__item">
            <img
              className="reviews__img"
              width={740}
              height={400}
              src={require("../images/gallery/img-5.png")}
              alt="Building"
            />
            <div className="reviews__box">
              <h3 className="reviews__box-title">My house sold out fast!</h3>
              <p className="reviews__box-text">
                I was finally able to sell my house quickly through Hounter by
                immediately setting me up with people who wanted my house. I
                also do not get a discount from the sale of my house. Awesome!
              </p>
              <div className="reviews__box-person">
                <div className="reviews__box-info">
                  <img
                    width={40}
                    height={40}
                    className="reviews__box-img"
                    src={require("../images/owners/owner-3.png")}
                    alt="Reviewer photo"
                  />
                  <span className="reviews__box-name">
                    Courtney Henry
                    <span className="reviews__box-position">
                      CEO Andarafish
                    </span>
                  </span>
                </div>
                <span className="reviews__box-score">4.3</span>
              </div>
            </div>
          </div>
          <div className="reviews__item">
            <img
              className="reviews__img"
              width={740}
              height={400}
              src={require("../images/gallery/img-5.png")}
              alt="Building"
            />
            <div className="reviews__box">
              <h3 className="reviews__box-title">
                Best! I got the house I wanted through Hounter
              </h3>
              <p className="reviews__box-text">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
              <div className="reviews__box-person">
                <div className="reviews__box-info">
                  <img
                    width={40}
                    height={40}
                    className="reviews__box-img"
                    src={require("../images/owners/owner-1.png")}
                    alt="Reviewer photo"
                  />
                  <span className="reviews__box-name">
                    Dianne Russell
                    <span className="reviews__box-position">
                      Manager Director
                    </span>
                  </span>
                </div>
                <span className="reviews__box-score">4.6</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
