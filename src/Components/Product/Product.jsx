import React from 'react'
import './product.css'
import { ImYoutube } from 'react-icons/im'
import { BsApple, BsSpotify, BsYoutube } from 'react-icons/bs'

function Product() {
    return (
        <div className='product__section__ui section' id='product'>
            <h2 className="section__title" data-aos="fade-down">Product</h2>
            <div className="divider"></div>

            <div className="info__action__prod">
                <div className="content_prod container">
                    <div data-aos="fade-right" className="content__ui__prod">
                        <h3 >Your Music Partner</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptate?</p>
                    </div>
                    <div className="row product__info_g">
                        <div data-aos="fade-right" className='col-sm-6'>
                            <input type="email" placeholder='Enter Your Email' />
                            <button type="submit"> <span><ImYoutube /></span>Subscribe</button>
                        </div>
                        <div data-aos="fade-left" className="col-sm-6">
                            <ul>
                                <li><a href="/" target="_blank">
                                    <span><BsYoutube /></span> Youtube</a></li>
                                <li><a href="/" target="_blank">
                                    <span><BsSpotify /></span> Spotify</a></li>
                                <li><a href="/" target="_blank">
                                    <span><BsApple /></span>Apple Music</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product