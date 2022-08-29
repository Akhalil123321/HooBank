import React from 'react'
import { motion } from "framer-motion"
import check from '../../images/true check.png'
import payment1 from '../../images/Payment.webp'
import payment2 from '../../images/Payment2.webp'
import apple from '../../images/apple.svg'
import google from '../../images/google.svg'
import './billing.css'
const Billing = () => {
    return (
        <div className='billing-cont'>
            <div className="l-s-billing-cont">
            <div className="blur line-blur"></div>
                <motion.img 
                src={payment1} 
                alt="" 
                className='billing-payment1 bill-payment'
                initial={{y:-100, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{type: 'spring', duration: 2}}
                />

                <motion.img 
                src={payment2} 
                alt="" 
                className='billing-payment2 bill-payment'
                initial={{y:-75, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{type: 'spring', duration: 2,delay:.2}}
                />

                <motion.div 
                className="cheack-payment"
                initial={{y:-50, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{type: 'spring', duration: 2,delay:.4}}
                >
                <img src={check} alt="" className='billing-check'/>
                <span>Great! Your Payment is succesfully.</span>
                </motion.div>
            </div>
            <motion.div 
            className="r-s-billing-cont"
            initial={{y:-0.25, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{type: 'spring', duration: 2}}
            >
                <h1 className='main-title small'>Easily control your billing & invoicing.</h1>
                <p className='secondary-pargraph gray'>
                    {`WOOHOO PAY offers advanced, most up-to-date payment options 
                    to make sure businesses across the globe get the best solution 
                    to accept payments online. To merchants and PSPs WOOHOO PAY 
                    offers the latest payment technologies.`}
                </p>
                <div className="bill-stores-cont">
                    <img src={apple} alt="" className='bill-store'/>
                    <img src={google} alt="" className='bill-store'/>
                </div>
            </motion.div>
        </div>
    )
}

export default Billing