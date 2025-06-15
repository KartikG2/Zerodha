import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='text-center p-5 mt-5'>
            <h2 className='mb-3'>Open a Zerodha account</h2>
            <p className='mb-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link className="signupBtn btn btn-primary mb-5  px-5 py-2" to="/signup">
                Sign up for free
            </Link>
        </div>
     );
}

export default OpenAccount;