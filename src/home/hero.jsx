import React from 'react';
import '../style.css';

export default function Hero() {
    return (
        <div className="container bg1">
            <div className="bgcolor">
                <div className="row d-flex padding">
                    <div className="column">
                        <para>GARMEN TEXTILE INDUSTRY</para>
                        <h1>You Can Never Go Wrong With Our Quality</h1>
                        <p>Integer id ipsum eu massa pretium pulvinar non vitae massa donec ut dignissim. Metus aenean vulputate ex sed sem aliquet dapibus. Mauris imperdiet.</p>
                        <div className="buttoncol d-flex gap">
                        <button className='button1'>DISCOVER MORE</button>
                        <div className='flex'>
                        <i className="fa-solid fa-play"></i>
                        <p>PLAY VIDEO</p>
                        </div>
                        </div>
                    </div>
                    <div className="freecolumn"></div>
                </div>
            </div>
        </div>
    );
}