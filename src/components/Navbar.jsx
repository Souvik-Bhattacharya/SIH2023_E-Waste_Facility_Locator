import { Link } from 'react-router-dom';

function Navbar() {
    const openHam = () => {
        var x = document.querySelector("#hamTabs");
        x.style.display = "block";
    }
    const closeHam = () => {
        var x = document.querySelector("#hamTabs");
        x.style.display = "none";
    }
    return (
        <nav id="navbar">
            <div id="ham">
                <i id="hamIcon" className="fa-solid fa-bars fa-lg" onClick={openHam}></i>
                <div id="hamTabs">
                    <i className="fa-solid fa-xmark" onClick={closeHam} id="close"></i>
                    <h2>Navigation</h2>
                    <br />
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/locate">Nearby Facilities</Link>
                    <Link to="/edu">Awareness</Link>
                    <Link to="/prediction">Prediction</Link>
                    <Link to="/recycle">Recycle</Link>
                    <Link to="/donate">Tree Plantation</Link>
                </div >
            </div>
            <i id="logo" className="fa-solid fa-recycle fa-lg"><Link to="/">E-Waste Facility Locator</Link></i>
            <div id="tabs">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/locate">Nearby Facilities</Link>
                <Link to="/edu">Awareness</Link>
                <Link to="/prediction">Prediction</Link>
                <Link to="/recycle">Recycle</Link>
                <Link to="/donate">Tree Plantation</Link>
            </div >
            <div id="user">
                <i id="signup" className="fa-solid fa-user-plus fa-lg" to="/signup"></i>
                <i id="login" className="fa-solid fa-arrow-right-to-bracket fa-lg" to="/login"></i>
            </div>
        </nav >
    )
}

export default Navbar;