import React from 'react';
import { Link } from "react-router-dom";
// import './Hero.css'; // Ensure CSS is imported in App.js or here

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col-12 p-3'>
                    <img 
                        src='media/images/homeHero.png' 
                        alt='Hero' 
                        className='heroImg mb-4 hero-anim' // Added hero-anim class
                    />
                    
                    <h1 className='mt-5 animate-up'>Invest in everything</h1>
                    <p className='mt-2 mb-4 animate-up' style={{animationDelay: "0.2s"}}>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <Link 
                        className="btn btn-primary fs-5 mb-5 animate-up" 
                        style={{width: "auto", margin: "0 auto", animationDelay: "0.4s"}} 
                        to="/signup"
                    >
                        Sign up for free
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;