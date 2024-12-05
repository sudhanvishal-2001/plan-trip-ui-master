// import Carousel from "react-spring-3d-carousel";
// import { useState, useEffect } from "react";
// import { config } from "react-spring";
// // import "./CarouselWithIcons.css"; // Add custom styles
// import "../Styles/CarouselWithIcons.css";
// import MessageIcon from "../Assets/message-icon.svg"


// export default function CarouselWithIcons(props) {
//   const table = props.cards.map((element, index) => {
//     return { ...element, onClick: () => setGoToSlide(index) };
//   });

//   const [offsetRadius, setOffsetRadius] = useState(2);
//   const [showArrows, setShowArrows] = useState(false);
//   const [goToSlide, setGoToSlide] = useState(0); // Start with the first slide
//   const [cards] = useState(table);

//   useEffect(() => {
//     setOffsetRadius(props.offset);
//     setShowArrows(props.showArrows);
//   }, [props.offset, props.showArrows]);

//   // Auto-slide logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setGoToSlide((prev) => (prev + 1) % cards.length); // Move to the next slide in a loop
//     }, props.autoSlideInterval || 3000); // Default to 3 seconds if no interval is provided

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [cards.length, props.autoSlideInterval]);

//   return (
//     <div className="carousel-container" style={{ width: props.width, height: props.height, margin: props.margin }}>
//       {/* Fixed Icons */}
//       <div className="fixed-icons">
//         <div className="icon"><img src={MessageIcon} /></div>
//         <div className="icon"><img src={MessageIcon} /></div>
//         <div className="icon"><img src={MessageIcon} /></div>
//         {/* <div className="icon"><img src={MessageIcon} /></div> */}
//       </div>

//       {/* Carousel */}
//       <Carousel
//         slides={cards}
//         goToSlide={goToSlide}
//         offsetRadius={offsetRadius}
//         showNavigation={showArrows}
//         animationConfig={config.gentle}
//       />
//     </div>
//   );
// }

import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import "../Styles/Carousel_new.css";
import MessageIcon from "../Assets/message-icon.svg";
import AttachmentIcon from "../Assets/attachment.svg";
import SaveIcon from "../Assets/save.svg";
import NewTabIcon from "../Assets/newtab.svg";
import vaccationIcon from "../Assets/vaccation-icon.svg";
import telescopeIcon from "../Assets/telescope.svg";
import footprintIcon from "../Assets/footprint.svg";
import locationIcon from "../Assets/location.svg";
import routeIcon from "../Assets/route.svg";
import LeftArrow from "../Assets/arrow-slide-left.svg"; // Add your left arrow icon
import RightArrow from "../Assets/arrow-slide-right.svg"; // Add your right arrow icon

export default function CarouselWithIcons(props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0); // Start with the first slide
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setGoToSlide((prev) => (prev + 1) % cards.length); // Move to the next slide in a loop
        }, props.autoSlideInterval || 3000); // Default to 3 seconds if no interval is provided

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [cards.length, props.autoSlideInterval]);

    const handlePreviousSlide = () => {
        setGoToSlide((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const handleNextSlide = () => {
        setGoToSlide((prev) => (prev + 1) % cards.length);
    };

    return (
        <div

            style={{
                width: props.width,
                height: props.height,
                margin: props.margin,
            }}
        >
            {/* Fixed Icons */}
            <div className="fixed-icons-container">
                <div className="fixed-icons">
                    <div className="icon">
                        <img src={AttachmentIcon} alt="icon" className="icon-size-lg" />
                    </div>
                    <div className="icon">
                        <img src={SaveIcon} alt="icon" className="icon-size" />
                    </div>
                    <div className="icon">
                        <img src={NewTabIcon} alt="icon" className="icon-size" />
                    </div>
                </div>

                <div className="fixed-icons-topleft">
                    <div className="icon">
                        <img src={vaccationIcon} alt="icon" className="icon-size" />
                    </div>
                </div>

                <div className="fixed-icons-topright">
                    <div className="icon">
                        <img src={telescopeIcon} alt="icon"  className="icon-size-md"/>
                        <span className="Roboto-text-icon">1.2 M</span>
                    </div>
                    <div className="icon">
                        <img src={footprintIcon} alt="icon"  className="icon-size-md"/>
                        <span className="Roboto-text-icon">95,5000</span>
                    </div>
                    <div className="icon">
                        <img src={routeIcon} alt="icon"  className="icon-size-md"/>
                        <span className="Roboto-text-icon">15</span>
                    </div>
                </div>

                <div className="fixed-icons-bottomright icon-sidebar-container">
                    <div className="icon">
                        <img src={locationIcon} alt="icon"  className="icon-size-md"/>
                        <span className="Roboto-text-icon black-text">Kyoto, Japan</span>
                    </div>
                    <div>
                        
                        <span className="Roboto-text-icon">Experience Japan’s timeless temples and cherry blossoms</span>
                    </div>
                </div>
            </div>
            {/* Carousel */}
            <Carousel 
            slides={cards.map((card, index) => ({
        ...card,
        style: {
            opacity: 1, // Ensure opacity is always 1
        },
    }))}
                // slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={{
                    duration: 300, // Adjust duration as needed
                    easing: t => t // Linear easing function
                }}
            />

            {/* Arrows */}
            {/* <div className="arrows">
                <div className="left-arrow" onClick={handlePreviousSlide}>
                    <img src={LeftArrow} alt="Previous" />
                </div>
                <div className="right-arrow" onClick={handleNextSlide}>
                    <img src={RightArrow} alt="Next" />
                </div>
            </div> */}

            {/* Pagination Dots */}
            <div className="pagination-dots"><div className="left-arrow" onClick={handlePreviousSlide}>
                    <img src={LeftArrow} alt="Previous" />
                </div>
                {cards.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === goToSlide ? "active" : ""}`}
                        onClick={() => setGoToSlide(index)}
                    ></div>
                ))}<div className="right-arrow" onClick={handleNextSlide}>
                <img src={RightArrow} alt="Next" />
            </div>
            </div>
        </div>
    );
}
