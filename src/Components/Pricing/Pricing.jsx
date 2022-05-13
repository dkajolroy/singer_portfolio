import React from 'react'
import './Pricing.css'
import { FiHeadphones } from 'react-icons/fi'
import Tilt from 'react-parallax-tilt';

function Pricing() {
    return (
        <div className='pricing__section__ui section' id='pricing'>
            <div className="container">
                <h2 className="section__title">Pricing</h2>
                <div className="divider"></div>
                <h5 data-aos="fade-up">Pick Your Best Option</h5>
                <p data-aos="fade-up" className='heading_para'>Listen without limit phone, speaker or any device more suitable you</p>

                <div className="pricing__item__groupe">
                    <div className="row gx-0">
                        <div data-aos="fade-up" className="col-lg-3 col-md-6 mt-3">
                            <Tilt className="pricing__item">
                                <h3>Individual</h3>
                                <p >$14.99/month after offer period<i className="mdi mdi-periodic-table:"></i></p>
                                <span>1 Account</span>
                                <ul>
                                    <li><span><FiHeadphones /></span>Listen to music ad-free</li>
                                    <li><span><FiHeadphones /></span>Play anywhere - even offline</li>
                                    <li><span><FiHeadphones /></span>On - demand playing</li>
                                </ul>
                                <div className="action">
                                    <button>Get Started</button>
                                </div>
                            </Tilt>
                        </div>
                        <div data-aos="fade-up" className="col-lg-3 col-md-6 mt-3">
                            <Tilt className="pricing__item">
                                <h3>Due</h3>
                                <p>$18.39/month after offer period<i className="mdi mdi-periodic-table:"></i></p>
                                <span>2 Account</span>
                                <ul>
                                    <li><span><FiHeadphones /></span>2 Premium account for a couple under one roof</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>
                                    <li><span><FiHeadphones /></span>Lorem ipsum dolor sit amet.</li>
                                </ul>
                                <div className="action">
                                    <button>Get Started</button>
                                </div>
                            </Tilt>
                        </div>
                        <div data-aos="fade-up" className="col-lg-3 col-md-6 mt-3">
                            <Tilt className="pricing__item">
                                <h3>Family</h3>
                                <p>$22.88/month after offer period<i className="mdi mdi-periodic-table:"></i></p>
                                <span>Up to 6 Account</span>
                                <ul>
                                    <li><span><FiHeadphones /></span>2 Premium account for a couple under one roof</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>

                                </ul>
                                <div className="action">
                                    <button>Get Started</button>
                                </div>
                            </Tilt>
                        </div>
                        <div data-aos="fade-up" className="col-lg-3 col-md-6 mt-3">
                            <Tilt className="pricing__item">
                                <h3>Student</h3>
                                <p>$7.49/month after offer period<i className="mdi mdi-periodic-table:"></i></p>
                                <span>1 Account</span>
                                <ul>
                                    <li><span><FiHeadphones /></span>2 Premium account for a couple under one roof</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>
                                    <li><span><FiHeadphones /></span>Due Misc a playlist for two, regularly update music your booth enjoy</li>

                                </ul>
                                <div className="action">
                                    <button>Get Started</button>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing