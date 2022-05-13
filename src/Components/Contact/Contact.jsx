import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { FaRegAddressCard } from 'react-icons/fa'

function GetInTouch() {
    return (
        <div className='contact__section__ui section' id='contact'>
            <h2 className="section__title">contact</h2>
            <div className="divider"></div>

            <div className="contact__ui">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 get_in_touch">
                            <h2>Get In Touch</h2>
                            <form>
                                <input type="text" placeholder='Enter Your Email' />
                                <textarea placeholder='Message' cols="30" rows="5"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-6 contact_us">
                            <h2>Contact Info</h2>
                            <ul>
                                <li><span>
                                    <HiOutlineMail /></span>Email:
                                    Example@example.com
                                </li>
                                <li>
                                    <span><FiPhoneCall /></span>Phone:
                                    +88059455115
                                </li>
                                <li><span>
                                    <FaRegAddressCard /></span>Office:
                                    USA New
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch