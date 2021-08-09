import React from 'react'
import './../Footer/Footer.css';
import linkedIn from './../../Assets/linkedIn.svg'
import github from './../../Assets/github.svg'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/tushararora01/">
                    <img src={linkedIn} alt="" className="footer-link-img" />
                    LinkedIn
                </a>
                <a className="footer-link" target="_blank" href="https://github.com/Tushar1401">
                    <img src={github} alt="" className="footer-link-img" />
                    Github
                </a>
            </div>
        </div>
    )
}

export default Footer
