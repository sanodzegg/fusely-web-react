import React from 'react';
import '../Styles/Header/header.css';
import heroimg from '../Source/IMG/hero-image.png';

function Header() {
    return(
        <header role="header">
            <div className="header-text-area">
                <h1>Let's get fusely together</h1>
                <p>Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                <button>Get Started</button>
            </div>
            <div className="hero">
                <img src={heroimg} alt="hero-image" />
            </div>
        </header>
    );
}

export default Header;