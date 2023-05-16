import { ReactComponent as PhoneSvg } from "../images/icons/icon-phone.svg";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import AboutStyle from "./scss/AboutStyle.scss";

function About() {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__info">
            <span className="about__subtitle subtitle">Ready to Sell!</span>
            <div className="about__box">
              <h2 className="about__title title">
                Let’s tour and see our house!
              </h2>
              <p className="about__text text">
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </p>
              <h3 className="about__title-list">House Detail</h3>
              <ul className="about__list">
                <li className="about__item">
                  <span className="about__text-list about__text-list--bed">
                    4 Bedrooms
                  </span>
                </li>
                <li className="about__item">
                  <span className="about__text-list about__text-list--bath">
                    2 Bathrooms
                  </span>
                </li>
                <li className="about__item">
                  <span className="about__text-list about__text-list--car">
                    1 Carport
                  </span>
                </li>
                <li className="about__item">
                  <span className="about__text-list about__text-list--floor">
                    2 Floors
                  </span>
                </li>
              </ul>
              <span className="about__line"></span>
              <div className="about__contact">
                <img
                  className="about__contact-img"
                  width={56}
                  height={56}
                  src={require("../images/owners/owner-1.png")}
                  alt="Manager photo"
                />
                <div className="about__contact-box">
                  <span className="about__contact-name">Dianne Russell</span>
                  <span className="about__contact-position">
                    Manager Director
                  </span>
                </div>
                <button className="about__contact-btn button" type="button">
                  <PhoneSvg
                    className="about__contact-svg"
                    width={24}
                    height={24}
                  />
                  Contact Now
                </button>
              </div>
            </div>
          </div>
          <div className="about__gallery">
            <a className="about__gallery-link" href="#"></a>
            <div className="about__slider">
              <Swiper
                spaceBetween={0}
                slidesPerView={3}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                touchMoveStopPropagation={true}
              >
                <SwiperSlide>
                  <a
                    href={require("../images/gallery/img-2.png")}
                    data-fancybox="gallery"
                    className="about__slide"
                  >
                    <img
                      className="about__slide-img"
                      src={require("../images/gallery/img-2.png")}
                      alt="Slide"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href={require("../images/gallery/img-3.png")}
                    data-fancybox="gallery"
                    className="about__slide"
                  >
                    <img
                      className="about__slide-img"
                      src={require("../images/gallery/img-3.png")}
                      alt="Slide"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href={require("../images/gallery/img-4.png")}
                    data-fancybox="gallery"
                    className="about__slide"
                  >
                    <img
                      className="about__slide-img"
                      src={require("../images/gallery/img-4.png")}
                      alt="Slide"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href={require("../images/gallery/img-2.png")}
                    data-fancybox="gallery"
                    className="about__slide"
                  >
                    <img
                      className="about__slide-img"
                      src={require("../images/gallery/img-2.png")}
                      alt="Slide"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href={require("../images/gallery/img-2.png")}
                    data-fancybox="gallery"
                    className="about__slide"
                  >
                    <img
                      className="about__slide-img"
                      src={require("../images/gallery/img-2.png")}
                      alt="Slide"
                    />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
