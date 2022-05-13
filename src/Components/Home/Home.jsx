import React from 'react'
import './home.css'
import { MdSlowMotionVideo } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';


function Home() {
    return (
        <div className='main__area' id='home'>

            <div className="info__action__details">
                <h2 data-aos="fade-up">Every Creative Music</h2>
                <p data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, soluta.</p>
                <div className="action__group">
                    <button className='get__started' data-aos="fade-right">Get Started<IoIosArrowForward /></button>
                    <button className='download' data-aos="fade-left"><MdSlowMotionVideo />Download</button>
                </div>
            </div>

        </div>
    )
}

export default Home