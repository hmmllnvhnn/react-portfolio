import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='landing'>
            <body id='home'>
                <div>
                    <h1 className='designer'>designer</h1>
                    <p className='designerD'>ui/ux designer that designs websites with functional and interactive experience.</p>
                    <h1 className='coder'>coder</h1>
                    <p className='coderD'>front end developer that focuses on aesthetically looking website.</p>
                </div>
                <div className="bg"></div>
            </body >
        </div>
    )
}

export default LandingPage