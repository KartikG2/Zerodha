import React from 'react';

function Stats() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                
                {/* Text Section */}
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h2 className='mb-4'>Trust with confidence</h2>
                    
                    <h3 className='sub_heading'>Customer-first always</h3>
                    <p className='statInfo mb-4'>
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    
                    <h3 className='sub_heading'>No spam or gimmicks</h3>
                    <p className='statInfo mb-4'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>
                    
                    <h3 className='sub_heading'>The Zerodha universe</h3>
                    <p className='statInfo mb-4'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    
                    <h3 className='sub_heading'>Do better with money</h3>
                    <p className='statInfo mb-4'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>
                
                {/* Image Section */}
                <div className='col-12 col-md-6 p-3 text-center'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' className='img-fluid w-100 mb-4'/>
                    <div className='d-flex justify-content-center'>
                        <a href='/products' className='mx-3'>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href='/kite' className='mx-3'>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Stats;