import React from 'react'
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  return (
    <div className='background'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 nav_left' >
                  <div className='logo'>logo</div>
                  <div onClick={ () => alert("hello")} className='menu'><MenuIcon/></div>
                </div>
                <div className='col-6 nav_p_parent'>
                  <p className='home'>Home</p>
                  <p className='reatures'>Features</p>
                  <p className='series'>Services</p>
                  <p className='location'>Location</p>
                  <p className='about'>About</p>
                </div>
            </div>
        </div>
    </div>
  )
}
