import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { GoThreeBars } from 'react-icons/go'
import guitar_icon from '../../Assets/guitar_icon.png'
import './nav_bar.css'

function NavBars() {


    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 50) {
                setActive(true)
            } else {
                setActive(false)
            }
        }
    }, [])

    return (

        <header className={active ? "nav_bar__main active" : "nav_bar__main "} >
            <div className="container">
                <div className="row">
                    <div className="col brand__icon">
                        <a href="/">
                            <img src={guitar_icon} alt="logo_icon" />
                        </a>

                    </div>

                    <nav className="col nav_bar">
                        <div className="col bars text-end">
                            <span onClick={() => setToggle(!toggle)}><GoThreeBars /></span>
                        </div>
                        <ul className={toggle ? "enable_nav" : 'disable_nav'}>
                            <li><Link spy={true} smooth={true} offset={50} duration={500} to='home'>Home</Link></li>
                            <li><Link spy={true} smooth={true} offset={50} duration={500} to='service'>Service</Link></li>
                            <li><Link spy={true} smooth={true} offset={50} duration={500} to='pricing'>Pricing</Link></li>
                            <li><Link spy={true} smooth={true} offset={50} duration={500} to='product'>Product</Link></li>
                            <li><Link spy={true} smooth={true} offset={50} duration={500} to='about'>About</Link></li>
                            <li><Link spy={true} smooth={true} offset={50} duration={500} to='contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBars