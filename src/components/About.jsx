import React from 'react'

import logo from '/logo.svg'

function About() {
    return (
        <div id="about">
            <div id="text">
                <h1>About Environerds: A Sustainable Solution for E-Waste</h1>
                <p>
                    At Environerds, we're on a mission to revolutionize the way you think about E-waste disposal. We believe that protecting our environment doesn't have to be a hassle. That's why we've created a web-based application that empowers you to make a positive impact while benefiting from the process.</p>
                <h3>Our Vision</h3>
                <p>
                    Environerds envisions a world where E-waste is no longer a threat to our environment but instead becomes a valuable resource. We're committed to making this vision a reality through innovative technology and a passion for sustainability.
                </p>

                <h3>How It Works</h3>
                <p>
                    <li>Our platform harnesses the power of machine learning to predict the potential value and environmental impact of your E-waste. When you recycle your old devices through Environerds, you not only contribute to a greener future but also earn credit points based on the precious elements generated from recycling.</li>
                    <li>These credit points can be redeemed for discounts and coupons that you can use in various third-party apps, making it a win-win for you and the environment.</li>
                    <li>But that's not all. Environerds also connects you with the nearest recyclers, ensuring that your E-waste is collected conveniently and responsibly. We're here to simplify the entire process for you.</li>
                </p>
                <h3>Spreading Awareness</h3>
                <p>We believe that knowledge is key to change. In our platform, you can find global statistics on the elements generated from frequently recycled E-waste and the adverse effects of improperly disposed of electronic devices. We're dedicated to raising awareness about the importance of responsible E-waste management.</p>
                <h3>Join the Environerds Movement</h3>
                <p>Together, we can make a difference. Join us in our mission to protect the environment, earn rewards, and spread awareness about the impact of E-waste. Together, we can turn E-waste into a resource for a sustainable future. Thank you for choosing Environerds as your partner in environmental responsibility. Let's make the world a greener place, one device at a time.</p>
            </div>
            <img src={logo} alt="" />

        </div >
    )
}

export default About
