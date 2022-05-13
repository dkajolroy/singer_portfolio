import React from 'react'
import './service.css'
import { GiFluffyFlame, GiMusicalScore, GiSelfLove } from 'react-icons/gi';


function Service() {
    return (
        <div className='service__section__ui section' id="service">
            <div className="container" >
                <h2 className='section__title'>Service</h2>
                <div className="divider"></div>

                <div className="container">
                    <div className="row gx-0">
                        <div className="col-lg-4 col-md-6  ">
                            <div className="service__item">
                                <span><GiSelfLove /></span>
                                <h4>Hart Touch</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ad.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="service__item">
                                <span><GiMusicalScore /></span>
                                <h4>Beats</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ad.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="service__item">
                                <span><GiFluffyFlame /></span>
                                <h4>Fluid</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ad.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="service__item">
                                <span><GiSelfLove /></span>
                                <h4>Hart Touch</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ad.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="service__item">
                                <span><GiMusicalScore /></span>
                                <h4>Beats</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ad.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                            <div className="service__item">
                                <span><GiFluffyFlame /></span>
                                <h4>Fluid</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service