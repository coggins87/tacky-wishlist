import React from 'react'
import LetterToSanta from '../LetterToSanta/LetterToSanta'
import './Nice.css'
import chipmunks from '../../assets/chipmunks.mp3'

export default class Nice extends React.Component{
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render (){
  return (
    <div className="nice">
      <audio autoPlay loop src={chipmunks} />
    <LetterToSanta />
    </div>
  )
  }
}