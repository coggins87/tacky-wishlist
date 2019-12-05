import React from "react";
import LetterToSanta from "../LetterToSanta/LetterToSanta";
import "./Nice.css";
import chipmunks from "../../assets/chipmunks.mp3";
import { Controller, Scene } from "react-scrollmagic";

export default class Nice extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="nice">
        <audio autoPlay loop src={chipmunks} />
        <LetterToSanta />
        <Controller>
          <Scene duration={600} pin>
            <div id="scroll-effect">
              <iframe
              title="santa flying"
                src="https://giphy.com/embed/3o6wrrn32NwP5EgpTG"
                width="480"
                height="352"
                frameBorder="0"
                allowFullScreen
              ></iframe>
           
            </div>
          </Scene>
        </Controller>
        <div className="letter-santa">
          <p>
      Ho, ho, ho! <br></br>
      You've been very good this year! Good little boys and girls wishes come true! <br></br>
      Now go help with some chores!<br></br>
      I'm always watching you!
          </p>
          </div>
      </div>
    );
  }
}
