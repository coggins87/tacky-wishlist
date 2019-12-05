import React from "react";
import "./LandingPage.css";
import postOffice from "../../assets/SantasHiddenVil_PostOffice.gif";
import bells from "../../assets/Live_Action_Fezz_-_15_-_Carol_of_the_Bells.mp3";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-router-dom";
import naughty from "../../assets/naughty-children-never-get-any-presents.mp3";

export default class LandingPage extends React.Component {
  toPath = event => {
    if (event.id === "naughty") {
      let audio = new Audio(naughty);
      audio.play();
    }
  };

  render() {
    return (
      <div className="landing">
        <audio autoPlay loop src={bells} id="player" preload="auto" ></audio>
      
        <h1 id="landing-header">
          {" "}
          <img
            src="https://www.fg-a.com/christmas/3-animated-present.gif"
            alt="dancing present"
          />
          Welcome To Santa's Post Office!{" "}
          <img
            src="https://www.fg-a.com/christmas/3-animated-present.gif"
            alt="dancing present"
          />
        </h1>{" "}
        <img
          id="post-office"
          src={postOffice}
          alt="elves in santa's mailroom"
        />
        <h2 id="second-header">
          Scroll Down to Write Your Wishlist to Santa Claus!
        </h2>
        <Controller>
          <Scene duration={600} pin>
            <div id="scroll-effect">
              <img
                src="https://www.fg-a.com/christmas/christmas-bells-ringing.gif"
                alt="ringing bells"
              />
              <img
                src="https://www.fg-a.com/christmas/christmas-bells-ringing.gif"
                alt="ringing bells"
              />
              <img
                src="https://www.fg-a.com/christmas/christmas-bells-ringing.gif"
                alt="ringing bells"
              />
              <img
                src="https://www.fg-a.com/christmas/christmas-bells-ringing.gif"
                alt="ringing bells"
              />

              <img
                src="https://www.fg-a.com/christmas/christmas-bells-ringing.gif"
                alt="ringing bells"
              />
            </div>
          </Scene>
        </Controller>
        <div>
          <h3 id="choice-question">Were You Naughty or Nice This Year? </h3>
          <div className="naughty-nice">
            <div role="link" id="naughty" onClick={e => this.toPath(e.target)}>
              <Link id="naughty" to="/naughty">
                Naughty >:)
              </Link>
            </div>
            <div role="link" id="nice" onClick={e => this.toPath(e.target)}>
              <Link id="nice" to="/nice">
                Nice O:)
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
