import React from 'react'
import { motion } from "framer-motion"
import AnimateHooks from './AnimateHooks';
import robot from '../../images/robot.png'
import card1 from '../../images/card1.webp'
import card2 from '../../images/card2.webp'
import card3 from '../../images/card3.webp'
const RightSide = () => {
    const {
        transition1,
        transition2,
        transition3,
        transition4,
        transition5,
        animate5
    }=AnimateHooks()
    return (
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
    )
}

export default RightSide