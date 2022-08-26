import React from 'react'
import LeftSide from './LeftSide';
import Counter from './Counter';
import RightSide from './RightSide';
import './hero.css'
const Hero = () => {

    return (
        <main>
            <div className='hero-cont'>
                <LeftSide/>
                <RightSide/>
            </div>
            <Counter/>
        </main>
    )
}

export default Hero