import React from 'react'
import '../Nav/Nav.css';
import logo from './../../Assets/logo.svg'

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="" className="logo" />
                <a href="/"><p className="logo-text">Fast Fingers</p></a>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-link"
                    href="https://github.com/Tushar1401"
                    rel="noreferrer"
                >
                See Code                        
                </a>
            </div>
        </div>
    )
}

export default Nav
