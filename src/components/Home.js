import React from "react";
import Features from "./Features/Features";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home_page">
        <div className="home__left">
          <div className="home__left__content">
              <h3 className="left__title">Colourful Play Dough</h3>
              <p>Our Organic, hand made squishy and scented dough balls help kids enhance their creativity and shape their imagination.</p>
          </div>
          {/* <img src='banner.jpg' ></img>     */}
        </div>
        <div className="home__right">
            <div className="home__right__content">
                <img className="right__image" src="yellow.jpg"></img>
            </div>
        </div>
      </div>
      <Features/>
    </>
  );
}

export default Home;
