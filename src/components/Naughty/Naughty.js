import React from 'react'
import LetterToSanta from '../LetterToSanta/LetterToSanta'
import './Naughty.css'

export default class Naughty extends React.Component{
 componentDidMount(){
   window.scrollTo(0, 0)
 }
 
  render (){ 
  return (
    <div className="naughty">
    <LetterToSanta />
    </div>
  )
  }
}