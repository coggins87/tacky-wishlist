import React from 'react';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import './LetterToSanta.css';

export default class LetterToSanta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }


    render() {
        return (
            <div>
                <Controller>
                    <Scene duration={500} triggerElement='.containerWishList' offset={600}>
                        {(progress) => (
                            <Tween
                                from = {{
                                    css: {
                                        opacity: '1'
                                    },
                                    ease: 'Circ.easeOutExpo'
                                }}
                                to = {{
                                    css: {
                                        opacity: '0'
                                    },
                                    ease: 'Circ.easeOutExpo'
                                }}
                                totalProgress={progress}
                                paused
                            >
                                <div className='containerWishList'>
                                    <form 
                                        className='wishList'
                                          
                                        >
                                        <textarea
                                        autoFocus
                                            className='wishItem'
                                            rows='20'
                                            cols='20'
                                            wrap='hard'
                                            placeholder='All I want for christmas is...'>
                                        </textarea>
                                        <input
                                            className='signInput' 
                                            type='text'
                                            placeholder='signed'
                                            onChange={(e) => this.setState({name: e.target.value.trim()})}
                                        />
                                    </form>
                                </div>
                                <div>
                                </div>
                            </Tween>
                        )}
                    </Scene>
                    <img src="https://myrealdomain.com/images/blinking-arrow-gif-5.gif" alt='arrow telling you to scroll down'/>

                </Controller>
                <div id="envscene">
                <Controller>
                    <Scene duration={500} triggerElement='.containerWishList' offset={500}>
                        {(progress) => (
                            <Tween
                                from = {{
                                    css: {
                                        width: '75px',
                                        opacity: '0'
                                    },
                                    ease: 'Circ.easeOutExpo'
                                }}
                                to = {{
                                    css: {
                                        width: '700px',
                                        opacity: '1',
                                        transform: 'scale(1.5)'
                                    },
                                    ease: 'Circ.easeOutExpo'
                                }}
                                totalProgress={progress}
                                paused
                            >
                                <div className='containerEnv'>
                                    <p className='nameText Santa'>To: Santa</p>
                                    {this.state.name === '' ? <p className='nameText'>From: Your Name Here</p> : <p className='nameText'>From: {this.state.name}</p>}
                                </div>
                            </Tween>
                        )}
                    </Scene>
                </Controller>
                </div>
            </div>
        )
    }
}