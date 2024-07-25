import React from 'react';
import '../style.css';
import image from '../images/media-1.jpg';
import image1 from '../images/media-2.jpg';

export default function About() {
    return (
        <div className="container about">
            <div className="row padding d-flex">
                <div className="column imagecolumn">
                    <img src={image} />
                    <img className='image' src={image1} />  
                </div>
                <div className="column aboutsec">
                    <para1>ABOUT GARMEN</para1>
                    <h2>You Can Find All Kinds of Fabric Here</h2>
                    <p>Phasellus ultricies ex vitae neque placerat porta. Aenean libero eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum imperdiet neque, sit amet porta facilisis elit. Nunc neque enim finibus at nisi non, auctor venenatis leo.</p>
                    <div className="d-flex main">
                        <div className="column left">
                            <h3>Our Vision</h3>
                            <ul>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Integer consectetur tincidunt.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Fusce lacinia nulla eu nunc sed.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Proin tempus lorem nibh.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Pellentesque id lectus tempor.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Morbi sed volutpat neque et.</li>
                            </ul>
                        </div>
                        <div className="column right">
                            <h3>Our Mission</h3>
                            <p><ul>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Pellentesque lectus tempor.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Fusce lacinia nulla eu sed.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Morbi sed volutpat neque et.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Integer consectetur tincidunt.</li>
                                <li><i className="fa-regular fa-circle-check"></i> &nbsp;Proin tempus lorem nibh.</li>
                            </ul></p>
                        </div>
                    </div>
                    <button className='button1'>MORE ABOUT US</button>
                </div>
            </div>
        </div>
    );
}