import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'> {/* align-items-center vertically centers content */}
                
                <div className='col-12 col-md-6 p-3 p-md-5'> 
                    <img src='media/images/largestBroker.svg' alt='RewardsImage' className="img-fluid" />
                </div>
                
                {/* Text Col */}
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-4'>
                        2+ million clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    
                    <div className='row'>
                        <div className='col-6'>
                            <ul className='list-unstyled'> {/* list-unstyled removes bullets */}
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='list-unstyled'>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                    </div>
                    
                    <img src='media/images/pressLogos.png' alt='pressImage' style={{width: "90%"}} className='mt-3'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;