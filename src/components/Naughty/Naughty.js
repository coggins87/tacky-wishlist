import React from 'react'
import LetterToSanta from '../LetterToSanta/LetterToSanta'
import './Naughty.css'
import nuttin from '../../assets/Imgettingnuttin.mp3'
export default class Naughty extends React.Component{
 componentDidMount(){
   window.scrollTo(0, 0)
 }
 
  render (){ 
  return (
    <div className="naughty">
              <audio autoPlay loop src={nuttin}></audio>

    <LetterToSanta />
    </div>
  )
  }
}