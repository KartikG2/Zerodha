import React from 'react';
function Stats() {
    return ( 
       <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h2 className='h2 mb-5'>Trust with confidence</h2>
                    <h3 className='sub_heading'>Customer-first always</h3>
                    <p className='statInfo mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='sub_heading'>No spam or gimmicks</h3>
                    <p className='statInfo mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3 className='sub_heading'>The Zerodha universe</h3>
                    <p className='statInfo mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='sub_heading'>Do better with money</h3>
                    <p className='statInfo mb-4 '>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-2 mt-5'>
                    <img src='media\images\ecosystem.png' alt='ecosystem-image' className=' ecosystemImage mt-5'/>
                    <div className='links row ms-5 mt-5'>
                        <div className='col-6'><a href='#'>Explore our products  <i class="fa-solid fa-arrow-right"></i></a></div>
                        <div className='col-6'><a href='#'>Try Kite demo  <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
                <div className='col text-center mb-5 mt-4'><img src='media/images/pressLogos.png' className='px-5 '/></div>
            </div>
       </div>
     );
}

export default Stats;