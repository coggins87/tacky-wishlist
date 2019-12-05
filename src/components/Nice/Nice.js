import React from 'react'
import LetterToSanta from '../LetterToSanta/LetterToSanta'
import './Nice.css'
export default class Nice extends React.Component{
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render (){
  return (
    <div className="nice">
    <LetterToSanta />
    </div>
  )
  }
}