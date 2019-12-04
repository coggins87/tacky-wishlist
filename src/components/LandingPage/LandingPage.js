import React from "react";
import "./LandingPage.css";
import postOffice from "../../assets/SantasHiddenVil_PostOffice.gif";
import bells from '../../assets/Live_Action_Fezz_-_15_-_Carol_of_the_Bells.mp3'
import { Controller, Scene } from "react-scrollmagic";
import naughty from '../../assets/naughty-children-never-get-any-presents.mp3'
export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: null
    };
  }

  toPath = event => {
    let audio = new Audio(naughty)
    audio.play()
    this.setState({
      choice: event.id
    });
  };
  render() {
    return (
      <div className="landing">
        <audio autoPlay loop src={bells}></audio>
        <h1 id="landing-header">
          {" "}
          <img src="https://www.fg-a.com/christmas/3-animated-present.gif" />
          Welcome To Santa's Post Office!{" "}
          <img src="https://www.fg-a.com/christmas/3-animated-present.gif" />
        </h1>
        {/*   <img src={postOffice} alt="Santa's post office"/>
         */}{" "}
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
            </div>
          </Scene>
        </Controller>
        <div>
          <h3 id="choice-question">Were You Naughty or Nice This Year? </h3>
          <div className="naughty-nice">
            <div id="naughty" onClick={e => this.toPath(e.target)}>
              <p>Naughty >:)</p>
            </div>
            <div id="nice" onClick={e => this.toPath(e.target)}>
              <p>Nice O:)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
