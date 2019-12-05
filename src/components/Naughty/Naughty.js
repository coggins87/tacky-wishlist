import React from "react";
import LetterToSanta from "../LetterToSanta/LetterToSanta";
import "./Naughty.css";
import nuttin from "../../assets/Imgettingnuttin.mp3";
import { Controller, Scene } from "react-scrollmagic";

export default class Naughty extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
setName=(name)=>{
  console.log(name)
return name
}
  render() {
    return (
      <div className="naughty">
        <audio autoPlay loop src={nuttin}></audio>

        <LetterToSanta/>
        <Controller>
          <Scene duration={600} pin>
            <div id="scroll-effect">
              <iframe
              name="naughty"
                src="https://giphy.com/embed/PBxHxXaqyp4bK"
                width="480"
                height="480"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              
            </div>
          </Scene>
        </Controller>
        <div className="letter-santa">
          <p>
      Ho, ho, ho! <br></br>
      You've been naughty this year! You know what happens to naughty girls and boys on Christmas? <br></br>
      They get coal in their stockings!<br></br>
      Sorry, try again next year! And be good!
          </p>
        </div>
      </div>
    );
  }
}
