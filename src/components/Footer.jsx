import { Link } from 'react-router-dom';

import logo from '/logo.svg'
import github from '/github.svg'
import email from '/email.svg'

function Footer() {
    return (
        <footer>
            <div id="footerLogo">
                <img src={logo} alt="Logo"/>
                    <h3>&copy; 2023 E-Waste Facility Locator</h3>
                    <p>Designed and Developed To promote e-waste recycling, awareness, and rewards for making a world where e-waste is managed sustainably, preserving our environment for future generations.</p>
            </div>
            <div class="links">
                <h1>Links</h1>
                <div class="footerTabs">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
            <div className="links">
                <h1>Social</h1>
                <div id="social">
                    <div className="link">
                        <img src={github} alt=""/>
                            <a href="">Github</a>
                    </div>
                    <div class="link">
                        <img src={email} alt=""/>
                            <a href="">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
