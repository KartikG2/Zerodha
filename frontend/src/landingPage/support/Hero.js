import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className=' p-3 p-md-5 container' id='supportWrapper'>

                <div className='d-flex justify-content-between align-items-center mb-5'>
                <h5 className='fw-bold'>Support portal</h5>
                <a href='/Tickets' className='text-decoration-underline'>Track Tickets</a>
                </div>
                <div className='row '>
                    <div className='col-12 col-md-7 mb-5'>
                        <h4 className='fs-4 mb-4 fw-normal lh-base'>Search for an answer or browse help topics to create a ticket</h4>
                        <input className="support-search-input mb-4" placeholder='Eg: How do i activate F&O, why is my order getting rejected...'/><br/>
                        <div className='d-flex flex-wrap gap-4'>
                        <a href='/account'  className='border-bottom pb-1'>Track account opening </a>
                        <a href='/activation'  className='border-bottom pb-1'>Track segment activation</a>
                        <a href='/Intraday'  className='border-bottom pb-1'> Intraday margins</a><br/>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 ps-md-5'>
                        <h4 className='fs-5 mb-3'>Featured</h4>
                        <ol className='ps-3'>
                            <li className=' mb-3'><a href='/Surveillance' className='SupportLinks border-bottom pb-2'>Surveillance measure on scrips - February 2025 </a></li>
                            <li className=' mb-3'><a href='/Current' className='SupportLinks border-bottom pb-2'>Current Takeovers and Delisting - February 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Hero;