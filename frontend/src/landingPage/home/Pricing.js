import React from 'react';
function Pricing() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p className=' pricingInfo '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#'>See pricing  <i class="fa-solid fa-long-arrow-right"></i></a>
                </div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border'>
                            <img src='media/images/pricing0.svg'/>
                            <p className='subInfo '>Free account <br/>opening</p>
                        </div>
                        <div className='col border'>
                            <img src='media/images/pricingEquity.svg'/>
                            <p className='subInfo '>Free equity delivery <br/>and direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <img src='media/images/other-trades.svg'/>
                            <p className='subInfo'>Intraday and<br/> F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;