import React from 'react'
import {features} from '../../content/Data'
import { motion } from "framer-motion"
import './business.css'
const Business = () => {

    const advantages = features.map(items=>(
        <motion.div 
        className='b-card-one'
        key={items.id}
        initial={{y:items.y, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{type: 'spring', duration: 2, delay:items.delay}}
        >
            <div className='b-icon-cont'>
                <img src={items.icon} alt="" />
            </div>
            <div className='b-content-cont'>
                <h3>{items.title}</h3>
                <p className='b-card-one-conent gray'>{items.content}</p>
            </div>
        </motion.div>
    ))
    return (
        <section className='b-cont' id='features'>
            <motion.div 
            className='b-l-s-cont'
            initial={{y:-0.25, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{type: 'spring', duration: 2}}
            >
                <h1 className='main-title medium'>You do the business, well handle the money.</h1>
                <p className='main-pargraph gray wider'>
                    {`With the right credit card, you can 
                    improve your financial life by building 
                    credit, earning rewards and saving money. 
                    But with hundreds of credit cards on the market.`}
                </p>
                <button>Get Started</button>
            </motion.div>
            <div className="b-r-s-cont">
            {advantages}
            </div>
        </section>
    )
}

export default Business