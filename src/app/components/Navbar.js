import React, { useState } from 'react';
import logo from '../assets/onh-nya-white.svg';
import '../../css/navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} alt="One Nature" />
            </div>

            <div className="rightSide">
                <h4 className='whitened'>Online Hotel Booking v2.0</h4>
            </div>

        </div>
    )
}

export default Navbar;
