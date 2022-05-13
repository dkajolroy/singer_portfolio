import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs'
import guitar_man from '../../Assets/guitar_man.png'
import './about.css'

function Testimonial() {
    return (
        <div className='about__section__ui section' id='about'>
            <div className="container">
                <h2 className="section__title">About</h2>
                <div className="divider"></div>

                <div className="about__info__ui">
                    <div className="about_item">
                        <h4>Navar Stop Listening !!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis sit mollitia tenetur suscipit maiores aliquam placeat inventore. Magni, impedit!</p>
                        <h4>What I do?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam architecto esse aliquam tenetur aperiam temporibus, fugit libero voluptatem ducimus. Error odit ipsam, nulla enim provident odio quo praesentium laborum neque, recusandae iure quas fugit in magnam rem a aut dolor. Dolores unde optio corporis corrupti, ipsum at nihil consequatur!</p>
                        <div className="action__groupe">
                            <button className="get_in_touch">Get In Touch <span><MdArrowForwardIos /></span></button>
                            <ul>
                                <li><BsFacebook /></li>
                                <li><BsYoutube /></li>
                                <li><BsInstagram /></li>
                                <li><BsTwitter /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="about_item">
                        <img src={guitar_man} alt="me" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial