import React from 'react'
import { motion } from "framer-motion"
const LeftSide = () => {
    return (
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
    )
}

export default LeftSide