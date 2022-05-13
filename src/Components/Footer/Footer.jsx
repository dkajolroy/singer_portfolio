import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer__section__ui'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <ul>
                            <li>Home</li>
                            <li>Price</li>
                            <li>Service</li>
                            <li>Product</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">

                        <ul>
                            <li>Help</li>
                            <li>Live</li>
                            <li>Get</li>
                            <li>To Go</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">

                        <ul>
                            <li>Community</li>
                            <li>Live</li>
                            <li>Contact</li>
                            <li>Report</li>
                            <li>Guideline</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">

                        <ul>
                            <li>Next</li>
                            <li>Pre review</li>
                            <li>Upcoming</li>
                            <li>Live Now</li>
                        </ul>
                    </div>
                </div>
                <div className="copy__right">
                    <div className="row text-center">
                        <div className="col-sm-6 ">
                            <span>www.example.com</span>
                        </div>
                        <div className="col-sm-6 ">
                            <span>Copyright all right Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer