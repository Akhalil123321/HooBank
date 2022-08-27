import React from 'react'
import LeftSide from './LeftSide';
import Counter from './Counter';
import RightSide from './RightSide';
import './hero.css'
const Hero = () => {

    return (
        <main>
            <div className='hero-cont'>
                <div className="blur circle-blur hero-l-blur"></div>
                <div className="blur hero-r-blur"></div>
                <LeftSide/>
                <RightSide/>
            </div>
            <Counter/>
        </main>
    )
}

export default Hero