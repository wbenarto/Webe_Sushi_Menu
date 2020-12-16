import React from 'react';
import image from '../../images/Webe Circle.jpg';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            
            <img className='logo' src={image}></img>
        </div>
    )
}

export default Navbar;