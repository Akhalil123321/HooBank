import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from "framer-motion"
import TypeWriterEffect from 'react-typewriter-effect';
import {feedback} from '../../content/Data'
import ScrollTrigger from 'react-scroll-trigger';

import './aboutus.css'

const Aboutus = () => {
    const [countOn, setCountOn] = React.useState(false)
    const leaderInfo = feedback.map(items => (
        <motion.div 
        className='leader-card-one'
        key={items.id}
        initial={{y:-75, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{type: 'spring', duration: 2}}
        >
            <FaQuoteLeft className='cuote-icon'/>
            <ScrollTrigger onEnter={() => setCountOn(true)}>
                <p className='type-writer'>
                    {countOn &&
                    <TypeWriterEffect
                    key={items.id}
                    cursorColor='transparent'
                    text={items.content}
                    startDelay={400}
                    typeSpeed={1}
                    textStyle={{ 
                        fontSize:'2.5vmin',
                        fontWeight: "100",
                        color:'rgba(255, 255, 255,.8)'
                    }}
                    />
                }
                </p>
            </ScrollTrigger>
            <div className='info-cont'>
                <img src={items.img} alt="" />
                <div>
                    <h5>{items.name}</h5>
                    <p className='gray2'>{items.title}</p>
                </div>
            </div>
        </motion.div>
    ))
    return (
        <div className='aboutus-cont' id='aboutUs'>
            <div className="blur circle-blur aboutus-blur"></div>
            <motion.div 
            className="aboutus-head-cont"
            initial={{y:-0.25, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{type: 'spring', duration: 2}}
            >
                <div className="main-title small">
                    What people are saying about us
                </div>
                <div className="gray aboutus-pargraph">
                    Everything you need to accept card payments and grow your business anywhere on the planet.
                </div>
            </motion.div>
                <motion.div className="aboutus-tail-cont">
                    {leaderInfo}
                </motion.div>
        </div>
    )
}

export default Aboutus