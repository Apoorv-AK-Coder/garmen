import React from 'react';
import '../style.css';
import { Usp } from '../data.js';

function UspData({ title, description, image }) {
    return (
        <div className='uspsection d-flex gap'>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Points() {
    return (
        <div className="conteiner usps">
            <div className="row">
                <div className="column d-flex gap">
                    {Usp.map((contentItem) => <UspData {...contentItem} />)}
                </div>
            </div>
        </div>
    );
}