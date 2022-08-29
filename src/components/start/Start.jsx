import React from 'react'
import { motion } from "framer-motion"
import woohooAr from '../../images/woohoo-ar.png'
import woohooEc from '../../images/woohoo-eComm.png'
import woohooAl from '../../images/Woohoo-Al.png'
import woohooSe from '../../images/Woohoo-Secure.png'
import './start.css'
const Start = () => {
    return (
        <motion.div 
        className='start-cont'
        initial={{y:-0.25, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{type: 'spring', duration: 2}}
        >
            <div className="platforms">
                <img src={woohooAl} alt="" />
                <img src={woohooEc} alt="" />
                <img src={woohooSe} alt="" />
                <img src={woohooAr} alt="" />
            </div>
            <div className="start-now">
                <div>
                    <h1 className='main-title small'>Let’s try our service now!</h1>
                    <p className='gray start-p'>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
                    <button>Get Started</button>
            </div>
        </motion.div>
    )
}

export default Start