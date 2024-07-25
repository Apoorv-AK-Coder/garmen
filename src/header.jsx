import React from 'react';
import './style.css';
import image from './images/Logo.png';

export default function Header() {
    return (
        <>
            <div className="container1 d-flex">
                <div className="head">
                    <div className="column flex gap">
                        <div className='flex'>
                            <i className="fa-solid fa-phone-volume"></i>
                            <p>+91-12345 67890</p>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>example.contact@gmail.com</p>
                        </div>
                        <div className='flex'>
                            <i className="fa-solid fa-paper-plane"></i>
                            <p>Laxmi Nagar, New Delhi, 110092</p>
                        </div>
                        <div className='flex social'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container2 d-flex">
                <div className="head flex">
                    <div className="column">
                        <img src={image}></img>
                    </div>
                    <div className="column navbar">
                        <i className="fa-solid fa-xmark"></i>
                        <nav>
                            <ul>
                                <a><li>Home</li></a>
                                <a><li>About Us</li></a>
                                <a><li>Services</li></a>
                                <a><li>Projects</li></a>
                                <a><li>Pages</li></a>
                                <a><li>Contact</li></a>
                            </ul>
                        </nav>
                    </div>
                    <div className="column navicon">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="column button">
                        <button className='button1'>MAKE PROJECT</button>
                    </div>
                </div>
            </div>
        </>
    );
}