import React from 'react'
import { motion } from "framer-motion"
import NumberCounter from 'number-counter';
import robot from '../../images/robot.png'
import card1 from '../../images/card1.webp'
import card2 from '../../images/card2.webp'
import card3 from '../../images/card3.webp'
import './hero.css'
const Hero = () => {
    const transition1 = {type: 'spring', duration: 1}
    const transition2 = {type: 'spring', duration: 2, delay:.5}
    const transition3 = {type: 'spring', duration: 2, delay:.6}
    const transition4 = {type: 'spring', duration: 2, delay:.9}
    const transition5 = {
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        delay : 1.2
    }
    const animate5 = {
                        opacity: [0 , 1, 1, 1, 1],
                        scale: [1, 1.3, 1, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["50%", "0%", "50%","0%", "50%"]
    }
    return (
        <div>
        <div className='hero-cont'>
            <motion.div 
            className="left-side"
            initial={{y:-0.25, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{type: 'spring', duration: 2}}
            >
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
                        <p className='main-pargraph gray'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.</p>
                        <p className='main-pargraph gray'>We examine annual percentage rates, annual fees.</p>
                    </div>
            </motion.div>
            <div className="right-side">
                <motion.img 
                src={robot} 
                alt="" 
                className='h-r-s-image'
                initial={{right:'-10rem', opacity: 0}}
                animate={{right:'0rem', opacity: 1}}
                transition={transition1}
                />
                <motion.img 
                src={card1} 
                alt="" 
                className='h-r-s-cards h-r-s-card1'
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={transition4}
                />
                <motion.img 
                src={card2}
                alt="" 
                className='h-r-s-cards h-r-s-card2'
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={transition3}
                />
                <motion.img 
                src={card3} 
                alt="" 
                className='h-r-s-cards h-r-s-card3'
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={transition2}
                />
                <motion.div 
                className='ball ball-one'
                animate={animate5}
                transition={transition5}
                ></motion.div>
                <motion.div 
                className='ball ball-two'
                animate={animate5}
                transition={transition5}
                ></motion.div>
                <motion.div 
                className='ball ball-three'
                animate={animate5}
                transition={transition5}
                ></motion.div>
            </div>
        </div>
            <div className='counter'>
                <span className='number'>
                    <NumberCounter end={3800} delay={1.5} preFix='+'/>
                    </span>
                <span className='grad'>user active</span>
                <span>|</span>
                <span className='number'>
                <NumberCounter end={230} delay={2} className="increment" postFix="+"/>
                    </span>
                <span className='grad'>trusted by company</span>
                <span>|</span>
                <span className='number'>$230M+</span>
                <span className='grad'>transaction</span>
            </div>
        </div>
    )
}

export default Hero