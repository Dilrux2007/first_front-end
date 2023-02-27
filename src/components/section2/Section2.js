import React from 'react'
import "./section2.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Section2() {
    return (
        < div className='section2'>
            <div className='container '>
                <div className='row'>
                    <div className='col-6'>
                        <p className=' minim'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.</p>
                        <div className='foto'></div>
                    </div>
                    <div className='col-6'>
                        <h1 className='col-8 our'>Our Values to Match Your Comfortness</h1>
                        <h1 className='good'>Good Facilities</h1>
                        <div className='line'></div>
                        <h1 className='simple'><ArrowForwardIcon/>Simple & Modern</h1>
                        <p className='amet_minim'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className='line'></div>
                        <h1 className='productivty'>Productivty Oriented</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
