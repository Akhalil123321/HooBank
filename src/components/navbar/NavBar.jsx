import React from 'react'
import Logo from '../../images/logo.svg'
import {Link} from 'react-scroll'
import { FaAlignJustify } from 'react-icons/fa';
import './navBar.css'
const NavBar = () => {
const [list, setList] = React.useState(false)
const listState = list ? 'list-open':'list-close'
return (
    <div className='nav-cont'>
	<img src={Logo} alt="" className='nav-logo'/>
	<ul className={listState}>
		<Link 
		to='home'
		span={true}
		smooth={true}
		onClick=  {() => setList(false)}
		>
            <li>Home</li>
        </Link>
        <Link 
		to='aboutUs'
		span={true}
		smooth={true}
		onClick=  {() => setList(false)}
        >
            <li>About Us</li>
        </Link>
        <Link 
		to='features'
		span={true}
		smooth={true}
		onClick=  {() => setList(false)}
        >
            <li>Features</li>
        </Link>
        <Link 
		to='solution'
		span={true}
		smooth={true}
		onClick=  {() => setList(false)}
        >
        <li>Solution</li>
        </Link>
    </ul>
	<FaAlignJustify className='list-icon' onClick={() => setList(!list)}/>
    </div>
)
}

export default NavBar