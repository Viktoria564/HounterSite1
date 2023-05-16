import { useState } from "react";
import SubscribeStyle from "./scss/SubscribeStyle.scss";

function Subscribe() {
  const [valid, setValid] = useState(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  );

  function isEmailValid(value) {
    return valid.test(value);
  }

  function onInput(value, input) {
    if (isEmailValid(value)) {
      input.style.borderColor = "green";
    } else {
      input.style.borderColor = "red";
    }
  }

  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__inner">
          <h2 className="subscribe__title title">
            Subscribe For More Info and update from Hounter
          </h2>
          <form className="subscribe__form" action="#">
            <input
              onInput={(e) => onInput(e.target.value, e.target)}
              className="subscribe__input"
              type="email"
              placeholder="Your email here"
            />
            <button className="subscribe__btn button" type="submit">
              Subsribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
