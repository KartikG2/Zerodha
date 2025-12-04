import React from 'react';
function Hero() {
    return ( 
    <div className='container border-bottom mb-5'>
        <div className='row text-center mt-5 mb-5'>
                <h1 className='heading mt-4 animate-up'>Zerodha Products</h1>
                <h3 className='text-muted fs-4 mt-2 animate-up' style={{animationDelay: "0.1s"}}>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3 mb-4 animate-up' style={{animationDelay: "0.2s"}}>Check out our <a href='/offerings' className='text-decoration-none'>investment offerings <i class="fa-solid fa-long-arrow-right"></i></a> </p>
        </div>
    </div>
     );
}

export default Hero;