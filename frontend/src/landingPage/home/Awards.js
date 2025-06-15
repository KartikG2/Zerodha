import React from 'react'
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Rewards Image'/>
                </div>
                <div className='col-6 p-5 mt-2'>
                    <h1 className=' h1 '>largest stock broker in India</h1>
                    <p className=' info '>2+ million clients contribute to over 15% of all retail order volumes in India daily by trading and investind in :</p>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct manual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' alt='pressImage' className='PressImage ms-3'/>
                </div>
            </div>
        </div>

    );
}

export default Awards;