import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="container display">
        <div className='col-6'>
          <h1 className='find'>Find The Comfort In Your Co-Working Space</h1>
          <p className='col-8 amet'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button className='find_place'>Find Place</button>
          <a href='!#' className='intro'>Introduction</a>
        </div>
        <div className='col-5'>
          <div className='right_img'></div>
          <div className='right_text'>
            <div><h1 className='ikkiyuzplus' style={{textAlign: "center"}}>200+</h1>
            <p className='office'>Private Office</p></div>
            <div><h1 className='ikkiyuzplus' style={{textAlign: "center"}}>100+</h1>
            <p className='office'>Co-Working Desk</p></div>
            <div><h1 className='ikkiyuzplus' style={{textAlign: "center"}}>200+</h1>
            <p className='office'>Meeting Office</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
