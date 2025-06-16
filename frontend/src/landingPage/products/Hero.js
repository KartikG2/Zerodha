import React from 'react';
function Hero() {
    return ( 
    <div className='container p-5 mt-5'>
        <div className='row text-center'>
                <h1 className='heading mt-5'>Zerodha Products</h1>
                <p className='paragraph mt-2'>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href='/offerings'>investment offerings <i class="fa-solid fa-long-arrow-right"></i></a> </p>
        </div>
    </div>
     );
}

export default Hero;