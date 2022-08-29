/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaLinkedinIn, FaGlobeAmericas , FaGithub, FaCopyright} from 'react-icons/fa';
import Logo from '../../images/logo.svg'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-cont'>
            <div>
                <img src={Logo} alt="" />
                <p className='gray foot-cntent'>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className='my-info'>
                <div className='copyright'>
                    <span className='gray2'>Copyright</span>
                    <FaCopyright className='gray2'/>
                    <span className='gray2'>2021 HooBank. All Rights Reserved.</span>
                    <div className="blur circle-blur footer-blur"></div>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/ahmed-khalil8" target='_blank' title='Linkedin' >
                        <FaLinkedinIn className='foot-icon'/>
                    </a>
                    <a href="https://ahmed-khalil.pages.dev/" target='_blank' title='My site'>
                        <FaGlobeAmericas className='foot-icon'/>
                    </a>
                    <a href="https://github.com/Akhalil123321" target='_blank' title='Github'>
                        <FaGithub className='foot-icon'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer