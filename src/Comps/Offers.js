import React from 'react';
import '../Styles/Offers/offers.css';
// logos
import binator from '../Source/IMG/Sponsors/binator-logo.png';
import buyme from '../Source/IMG/Sponsors/buyme-logo.png';
import loogipsum from '../Source/IMG/Sponsors/loogipsum-logo.png';
import square from '../Source/IMG/Sponsors/square-logo.png';
import umbrella from '../Source/IMG/Sponsors/umbrella-logo.png';
// offering illustrations
import illustration1 from '../Source/IMG/offering1.png';
import illustration2 from '../Source/IMG/offering2.png';
import illustration3 from '../Source/IMG/offering3.png';

function Offers() {
    return(
        <section role="Service Offerings" className="offers">
            <div className="partners">
                <img src={binator} alt="binator logo" />
                <img src={buyme} alt="buyme logo" />
                <img src={loogipsum} alt="loogipsum logo" />
                <img src={umbrella} alt="umbrella logo" />
                <img src={square} alt="square logo" />
            </div>
            <div className="off-sect">
                <img src={illustration1} alt="Offering illustration" />
                <div className="offer-text-area">
                    <h2>Detailed Examination</h2>
                    <p>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                    <button>Learn more</button>
                </div>
            </div>
            <div className="off-sect">
                <div className="offer-text-area">
                    <h2>Creative Solutions</h2>
                    <p>Creativity is our second name. We're full of inventive ideas and we're happy to present them to you.</p>
                    <button>Learn more</button>
                </div>
                <img src={illustration2} alt="Offering illustration" />
            </div>
            <div className="off-sect">
                <img src={illustration3} alt="Offering illustration" />
                <div className="offer-text-area">
                    <h2>Professional Team</h2>
                    <p>Well, obviously, we're professionals. Don't hesitate - get to know us better.</p>
                    <button>Learn more</button>
                </div>
            </div>
        </section>
    );
}

export default Offers;