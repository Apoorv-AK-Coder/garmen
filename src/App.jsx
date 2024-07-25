import React from 'react';
import Header from './header.jsx';
import Hero from './home/hero.jsx';
import Points from './home/usp.jsx';
import About from './home/about.jsx';
import Number from './home/industry-number.jsx';
import Service from './home/service.jsx';
import Logo from './home/logos.jsx';
import Why from './home/why.jsx';

export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Points />
            <About />
            <Number />
            <Service />
            <Logo />
            <Why />
            <h2>Hello</h2>
        </div>
    );
}