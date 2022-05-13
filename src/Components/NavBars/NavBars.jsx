import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import guitar_icon from '../../Assets/guitar_icon.png'
import './nav_bar.css'

function NavBars() {


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
                    <nav className='col'>
                        <ul>
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