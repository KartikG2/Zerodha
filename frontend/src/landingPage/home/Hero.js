import React from 'react';
import './Hero.css'
import {Link} from "react-router-dom";
function Hero() {
    return (  
        <div className='container p-5 mt-3'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero Image' className='heroImg mb-4' style={{width:"70%"}}/>
                    <h1 className='heading mt-5'>Invest in everything</h1>
                    <p className='paragraph mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <Link className="signupBtn btn btn-primary mb-5  px-5 py-2" to="/signup">
                      Sign up for free
                    </Link>
            </div>
        </div>
    );
}

export default Hero;