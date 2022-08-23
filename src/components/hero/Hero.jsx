import React from 'react'
import robot from '../../images/robot.png'
import './hero.css'
const Hero = () => {
    return (
        <>
        <div className='hero-cont'>
            <div className="left-side">
                <div className='hero-discount'>
                    <span className='white'>20% </span>
                    <span className='gray'>discount for </span>
                    <span className='white'>1 month </span>
                    <span className='gray'>account</span>
                    </div>
                    <div className='hero-title-cont'>
                        <span className='main-title large'>The Next</span>
                        <span className='main-title grad large'>Generation</span>
                        <span className='main-title large'>Payment Method</span>
                    </div>
                    <div>
                        <p className='nav-pargraph gray'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.</p>
                        <p className='nav-pargraph gray'>We examine annual percentage rates, annual fees.</p>
                    </div>
            </div>
            <div className="right-side">
                <img src={robot} alt="" className='h-r-s-image'/>
                <div className='ball ball-one'></div>
                <div className='ball ball-two'></div>
                <div className='ball ball-three'></div>
            </div>
        </div>
            <div className='counter'>
                <span className='number'>3800+</span>
                <span className='grad'>user active</span>
                <span>|</span>
                <span className='number'>230+</span>
                <span className='grad'>trusted by company</span>
                <span>|</span>
                <span className='number'>$230M+</span>
                <span className='grad'>transaction</span>
            </div>
        </>
    )
}

export default Hero