import React from "react";
import "./LandingPage.css";
import postOffice from "../../assets/SantasHiddenVil_PostOffice.gif";
import { Controller, Scene } from "react-scrollmagic";

export default class LandingPage extends React.Component {
constructor(props){
  super(props)
  this.state = {
    choice: null
  }
}

  toPath=(event)=>{
  
    this.setState({
      choice: event.id
    })
  }
  render() {
    return (
      <div className="landing">
        <a href="https://www.fg-a.com" rel="noopener noreferrer" target="_blank">
          <img
            src="https://content.screencast.com/users/fg-a/folders/christmas/media/2408a30a-f439-4d38-add2-5424aaeb368e/santa-Christmas-tree.gif"
            width="296"
            height="172"
            margin="O auto"
            alt="Clipart"
          />
        </a>
        {/*  <div className="animation-1">Placeholder Animation</div>
  <div className="animation-2">Placeholder Animation</div>
  <div className="animation-3">Placeholder Animation</div> */}
        <h1 id="landing-header">Welcome To Santa's Post Office!</h1>
        {/*   <img src={postOffice} alt="Santa's post office"/>
         */}{" "}
        <img
          id="post-office"
          src={postOffice}
          alt="elves in santa's mailroom"
        />
        <h2 id="second-header">
          Scroll to Send Your Wishlist to Santa Claus!
        </h2>
        <Controller>
          <Scene duration={600} pin>
            <div id="scroll-effect">
              Down Scroll Animation Here
            </div>
          </Scene>
        </Controller>
        <div>
          <h3>Were You Naughty or Nice This Year? </h3>
          <div className="naughty-nice">
          <div id="naughty" onClick={e=>this.toPath(e.target)}>
            <p>
            Naughty >:)
            </p>
            </div>
            <div id="nice" onClick={e=>this.toPath(e.target)} >
            <p>
            Nice O:)
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
