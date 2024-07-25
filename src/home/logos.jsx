import React from 'react';
import '../style.css';
import image1 from '../images/Partner-1.png';
import image2 from '../images/Partner-2.png';
import image3 from '../images/Partner-3.png';
import image4 from '../images/Partner-4.png';
import image5 from '../images/Partner-5.png';
import image6 from '../images/Partner-6.png';

export default function Logo() {
    return(
        <div className="container logosec">
            <div className="row">
                <div className="column d-flex">
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3} />
                    <img src={image4} />
                    <img src={image5} />
                    <img src={image6} />
                </div>
            </div>
        </div>
    );
}