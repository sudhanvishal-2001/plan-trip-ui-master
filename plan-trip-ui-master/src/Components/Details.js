import React from 'react'
import '../Styles/Details.css'
import backgroundImage from "../Assets/detailsbg.png";
import backgroundImage1 from "../Assets/detailsbg1.png";
import logo from "../Assets/logo.svg";
import profilelogo from "../Assets/profilelogo.png";
import belllogo from "../Assets/belllogo.png";
import StariconSvg from "../Assets/StariconSvg.svg";
import Slider from './Slider';
import { GoLocation } from "react-icons/go";

export const Details = () => {
  return (
    <div>
        <div className="Details-bg-container">
            <div className='details-bg1'>
                <img src={backgroundImage} alt="Background 1" />
            </div>
            <div className='details-bg2'>
                <img src={backgroundImage1} alt="Background 1" />
            </div>
            <img className="fp-logo" src={logo} alt="Logo" />
            <img className="fp-profilelogo" src={profilelogo} alt="Profile Logo" />
            <img className="fp-belllogo" src={belllogo} alt="Bell Logo" />

            <div className='details-slider'>
                <Slider />
            </div>

            <div className='details-content inter'>
                <div className='details-title'>
                    <p>Why Japan Suits You</p> 
                    <p className='details-title1'>#Japan</p>
                    <p className='details-title1'>#Best Places</p>
                    </div>
                <div className='details-location'><p><GoLocation /> location</p></div>
                <div className='details-Rating'><p>User Rating</p></div>
                <div className='details-txt '><p>Japan caters to every kind of traveler. If you appreciate serene mountains, the breathtaking hikes in the Japanese Alps await you. Read More..</p></div>
                <div className='details-act'>
                    <div className='Poppins'><p>1m+</p>peoples visited</div>
                    <div className='Poppins'><p>2k+</p>Activities Available</div>
                    <div className='Poppins'><p>5m+</p>Itineraries Available</div>
                </div>
                <div className='details-price'><p>Tentative Budget Starts From</p> <p className='details-price1'>₹ 20 - 25k</p></div>
                <div className='Itineraries-btn Helvetica-text-icon'>Explore Itineraries</div>
            </div>
            
            <div className='pyt'>
                <div className='pyt1 inter' > <img src={StariconSvg} alt="" />Plan Your Trip</div>
            </div>
      </div>
        
      
    </div>
  )
}
