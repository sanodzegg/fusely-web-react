import React from 'react';
import '../Styles/PlansNContent/plansncontent.css';
// blog images
import pencils from '../Source/IMG/Blog/pencils.png';
import notebook from '../Source/IMG/Blog/notebook.png';
import brush from '../Source/IMG/Blog/drawing-brush.png';

function Plans() {
    return(
        <section className='plans-n-content'>
            <div className="plans">
                <h1>Choose your plan</h1>
                <div className="plan-offerings">
                    <div>
                        <p>Starter</p>
                        <h1>Free</h1>
                        <p>Dashboard</p>
                        <p>Limited Support</p>
                        <p>Forever free</p>
                        <button>Get Started</button>
                    </div>
                    <div className="premium">
                        <p>Premium</p>
                        <h1>$29<span>/month</span></h1>
                        <p>Dashboard & Analysis</p>
                        <p>Premium Support</p>
                        <p>Tracking Service</p>
                        <button>Get Started</button>
                    </div>
                    <div>
                        <p>Enterprise</p>
                        <h1>$49<span>/month</span></h1>
                        <p>All features in Premium</p>
                        <p>Realtime overview</p>
                        <p>Mobile app</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="blog-header">
                <h2>From our blog</h2>
                <button>View all</button>
            </div>
            <div className="blog-flexbox">
                <div>
                    <img src={pencils} alt="Picture of pencils and drawing materials." />
                    <div className="blog-text-area">
                        <h4>What’s Fusely?</h4>
                        <p>A brand new company, created for everyone. This article will help you understand what "fusely" stands for.</p>
                        <button>Read more</button>
                    </div>
                </div>
                <div>
                    <img src={notebook} alt="Picture a notebook." />
                    <div className="blog-text-area">
                        <h4>Introducing Fusely Engage</h4>
                        <p>We’re happy to announce the Fusely Engage. The first growth automation platform designed for the digital interactions.</p>
                        <button>Read more</button>
                    </div>
                </div>
                <div>
                    <img src={brush} alt="Picture of a drawing brush." />
                    <div className="blog-text-area">
                        <h4>Premium vs Enterprise plan</h4>
                        <p>Let’s compare our most popular plans: Premium and Enterprise. This article will help you decide which one will be better for your needs.</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Plans;