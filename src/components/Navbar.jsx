import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav id="navbar">
            <i id="logo" class="fa-solid fa-recycle fa-lg"><Link to="/">E-Waste Facility Locator</Link></i>
            <div id="tabs">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/locate">Nearby Facilities</Link>
                <Link to="/awareness">Awareness</Link>
                <Link to="/prediction">Prediction</Link>
                <Link to="/recycle">Recycle</Link>
                <Link to="/donate">Tree Plantation</Link>
            </div >
            <div id="user">
                <i id="signup" class="fa-solid fa-user-plus fa-lg" to="/signup"></i>
                <i id="login" class="fa-solid fa-arrow-right-to-bracket fa-lg" to="/login"></i>
            </div>
        </nav >
    )
}

export default Navbar;