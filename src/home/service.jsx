import React from 'react';
import '../style.css';
import { servicedata } from '../data.js';

function Data({image, title, description, link}) {
    return (
        <div className='services'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p><a href={link}>Read More</a></p>
        </div>
    );
}

export default function Service() {
    return (
        <div className="container bg3 bgcolor">
            <div className="bgcolor">
                <div className="row padding">
                    <div className="column service">
                        <para1>OUR SERVICE</para1>
                        <h2>Textile is What We Do</h2>
                        <p>Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus vel felis vel orci iaculis tempor tristique sagittis urna. Phasellus ac ante in lacus tempor egestas.</p>
                    </div>
                    <div className='servicesec'>
                        {servicedata.map((contentItem) => <Data {...contentItem} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}