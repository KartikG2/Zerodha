import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center'>
                
                {/* Left Side: Text */}
                <div className='col-12 col-md-4 p-4 text-center-mobile'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p className='pricingInfo'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='/pricing' className="text-decoration-none">See pricing <i className="fa-solid fa-long-arrow-right"></i></a>
                </div>
                
                {/* Right Side: 3 Boxes */}
                {/* Hidden on mobile? No, stack them. */}
                <div className='col-12 col-md-8 p-4'>
                    <div className='row text-center'>
                        
                        <div className='col-12 col-md-4 mb-3'>
                            <div className="pricing-box">
                                <img src='media/images/pricing0.svg' className="w-50 mb-3" alt='pricing0'/>
                                <p className='subInfo'>Free account <br/>opening</p>
                            </div>
                        </div>
                        
                        <div className='col-12 col-md-4 mb-3'>
                            <div className="pricing-box">
                                <img src='media/images/pricingEquity.svg' className="w-50 mb-3" alt='pricingEquity'/>
                                <p className='subInfo'>Free equity delivery <br/>and direct mutual funds</p>
                            </div>
                        </div>
                        
                        <div className='col-12 col-md-4 mb-3'>
                            <div className="pricing-box">
                                <img src='media/images/other-trades.svg' className="w-50 mb-3" alt='otherTrades'/>
                                <p className='subInfo'>Intraday and<br/> F&O</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;