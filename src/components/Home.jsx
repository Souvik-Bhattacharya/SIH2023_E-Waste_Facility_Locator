import React from "react";

import mission from "/mission.png"
import vision from "/vision.png"

function Home() {
    return (
        <div id="home">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mission} className="d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={vision} className="d-block" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1>All E-Waste Recycling Facilities Across India</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15483577.547145078!2d83.96126292770049!3d18.656352441991164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sE-waste%20collection%20and%20recycling%20facility%20in%20India!5e0!3m2!1sen!2sin!4v1694891353768!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Home;