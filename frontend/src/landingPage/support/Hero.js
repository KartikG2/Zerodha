import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className=' py-3 px-5 container' id='supportWrapper'>
                <div className='Support-headings'>
                <div ><h5>Support portal</h5></div>
                <div ><a href='' className='SupportLinks border-bottom pb-2'>Track Tickets</a></div>
                </div>
                <div className='row mt-4'>
                    <div className='col-7 py-5'>
                        <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                        <input className="Support-input" placeholder='Eg: How do i activate F&O, why is my order getting rejected...'/><br/>
                        <div className='mt-3'>
                        <a href=''  className='SupportLinks me-3 border-bottom pb-2'>Track account opening </a>
                        <a href=''  className='SupportLinks me-3 border-bottom pb-2'>Track segment activation</a>
                        <a href=''  className='SupportLinks me-3 border-bottom pb-2'> Intraday margins</a><br/>
                        </div>
                    </div>
                    <div className='col-5 py-5 ps-5 mt-4'>
                        <h4>Featured</h4>
                        <ol>
                            <li className='text-white mt-3'><a href='' className='SupportLinks border-bottom pb-2'>Surveillance measure on scrips - February 2025 </a></li>
                            <li className='text-white mt-3'><a href='' className='SupportLinks border-bottom pb-2'>Current Takeovers and Delisting - February 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='row'>

            </div>
        </section>
     );
}

export default Hero;