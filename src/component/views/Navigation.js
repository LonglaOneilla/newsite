import React from 'react'
import './styles/navigation.css'

const Navigation = () => {
    return (
        <div className='navigation '>
            <nav className="first-nav flex">
                <div className="left flex">
                    <div className="office">
                        <span>offices</span>
                    </div>
                    <div className="alumni">
                        <span>alumni</span>
                    </div>
                    <div className="media">
                        <span>media center</span>
                    </div>
                    <div className="subscribe">
                        <span>subscribe</span>
                    </div>
                    <div className="contact">
                        <span>contact</span>
                    </div>
                </div>
                <div className="right flex">
                    <div className="global">
                        <span>global <span className="vl"></span> english </span>
                    </div>
                    <div className="folder">
                        <span>red folder</span>
                    </div>
                </div>
            </nav>
            <nav className="second-nav flex">
                <div className=" flex">
                    <div className="logo">
                        <h3>ZAATI CONSULTING</h3>
                    </div>
                    <ul className="flex">
                        <li><a href="/">ZAATI News</a></li>
                        <li><a href="/">Do business with us</a></li>
                        <li><a href="/">Our business partners</a></li>
                        <li><a href="/">Outreach</a></li>
                        <li><a href="/">Career</a></li>
                        <li><a href="/">How</a></li>
                        <li><a href="/">Learn to our experiences</a></li>
                    </ul>
                </div>
                <ul className='flex'>

                    <li className="sec-right"><a href="/">explore</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
