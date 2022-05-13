import React from 'react'
import './home.css'
import { MdSlowMotionVideo } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';


function Home() {
    return (
        <div className='main__area' id='home'>

            <div className="info__action__details">
                <h2>Every Creative Music</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, soluta.</p>
                <div className="action__group">
                    <button className='get__started'>Get Started<IoIosArrowForward /></button>
                    <button className='download'><MdSlowMotionVideo />Download</button>
                </div>
            </div>

        </div>
    )
}

export default Home