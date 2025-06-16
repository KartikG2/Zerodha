import React from 'react';
function Education() {
    return (
       <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/education.svg' alt='Education-image' style={{width:"90%"}}/>
                </div>
                <div className='col-6 p-5'>
                    <h2 className='mb-4'>Free and open market education</h2>
                    <div className='mb-4'>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='/varsity'>Varsity <i className="fa-solid fa-long-arrow-right"></i></a>
                    </div>
                    <div>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='/trading'>TradingQ&A  <i className="fa-solid fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Education;