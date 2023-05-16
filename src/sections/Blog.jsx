import BlogStyle from "./scss/BlogStyle.scss";
function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <span className="blog__subtitle subtitle">
          See tips and trick from our partnership
        </span>
        <h2 className="blog__title title">
          Find out more about selling and buying homes
        </h2>
        <button className="blog__btn button" type="button">
          More Artikel
        </button>
        <ul className="blog__content-list">
          <li className="blog__content-item">
            <img
              width={200}
              height={144}
              className="blog__content-img"
              src={require("../images/blog/img-1.jpg")}
              alt="House inside"
            />
            <div className="blog__content-info">
              <span className="blog__content-name blog__content-name--orange">
                Dianne Russell
              </span>
              <h3 className="blog__content-title">
                The things we need to check when we want to buy a house
              </h3>
              <span className="blog__content-date">
                <span>4 min read</span>25 Apr 2021
              </span>
            </div>
          </li>
          <li className="blog__content-item">
            <img
              width={200}
              height={144}
              className="blog__content-img"
              src={require("../images/blog/img-2.jpg")}
              alt="House inside"
            />
            <div className="blog__content-info">
              <span className="blog__content-name blog__content-name--purple">
                Courtney Henry
              </span>
              <h3 className="blog__content-title">
                7 Ways to distinguish the quality of the house we want to buy
              </h3>
              <span className="blog__content-date">
                <span>6 min read</span>24 Apr 2021
              </span>
            </div>
          </li>
          <li className="blog__content-item">
            <img
              width={200}
              height={144}
              className="blog__content-img"
              src={require("../images/blog/img-3.jpg")}
              alt="House inside"
            />
            <div className="blog__content-info">
              <span className="blog__content-name blog__content-name--blue">
                Darlene Robertson
              </span>
              <h3 className="blog__content-title">
                The best way to know the quality of the house we want to buy
              </h3>
              <span className="blog__content-date">
                <span>2 min read</span>24 Apr 2021
              </span>
            </div>
          </li>
          <li className="blog__content-item">
            <img
              width={560}
              height={280}
              className="blog__content-img"
              src={require("../images/blog/img-4.jpg")}
              alt="House inside"
            />
            <div className="blog__content-info">
              <span className="blog__content-name blog__content-name--yellow">
                Cameron Williamson
              </span>
              <h3 className="blog__content-title blog__content-title--size">
                12 Things to know before buying a house
              </h3>
              <p className="blog__content-text text">
                Want to buy a house but are unsure about what we should know,
                here I will try to explain what we should know and check when we
                want to buy a house
              </p>
              <span className="blog__content-date">
                <span>8 min read</span>25 Apr 2021
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blog;
