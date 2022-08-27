import React from 'react'
import { motion } from "framer-motion"
import scan from '../../images/scan.jpg'
import chart from '../../images/Payment chart.jpg'
import methods from '../../images/Payment methods.jpg'
import './findCard.css'
const FindCard = () => {
    return (
        <div className='findcard-cont'>
            <motion.div 
            className="l-s-findcard-cont"
            initial={{y:-0.25, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{type: 'spring', duration: 2}}
            >
            <h1 className='findcard-header main-title small'>Find a better card deal in few easy steps.</h1>
                <p className='secondary-pargraph gray'>
                    {
                    `Each of WOOHOO PAY’s clients can be sure to receive tailored 
                    treatment to account for their specific business needs, which makes online 
                    acquiring with WOOHOO PAY a natural choice for merchants and PSPs.`
                    }
                </p>
                <button>Get Started</button>
            </motion.div>
            <div className='r-s-findcard-cont'>
                <motion.div 
                className='findcard-circle circle1'
                whileInView={{
                    rotate: [180, 180, 0, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "50%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                }}
                ></motion.div>
                <motion.div 
                className='findcard-circle circle2'
                whileInView={{
                    rotate: [-180, -180, 0, -180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "50%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                }}
                ></motion.div>
                <motion.div 
                className='findcard-circle circle3'
                whileInView={{
                    rotate: [180, 180, 0, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "50%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                }}
                ></motion.div>
                <img src={methods} alt="" className='findcard-images findcard-image1'/>
                <img src={chart} alt="" className='findcard-images findcard-image2'/>
                <img src={scan} alt="" className='findcard-images findcard-image3'/>
            </div>
        </div>
    )
}

export default FindCard