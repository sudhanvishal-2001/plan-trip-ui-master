import "../Styles/Carousel_new.css";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import Card from "./Card";
// import CardNews from "./CardNews";
import { config } from "react-spring";
import Carroussel from "./Slide";
import imageslide from "../Assets/scimg1.png"
import imageslide1 from "../Assets/scimg2.png"
import imageslide2 from "../Assets/scimg3.png"

export default function App() {
    // let cards = [
    //     {
    //         key: uuidv4(),
    //         content: <img src={imageslide} />
    //     },
    //     {
    //         key: uuidv4(),
    //         content: <img src={imageslide} />
    //     },
    //     {
    //         key: uuidv4(),
    //         content: <img src={imageslide} />
    //     },
    //     {
    //         key: uuidv4(),
    //         content: <img src={imageslide} />
    //     },
    //     {
    //         key: uuidv4(),
    //         content: <img src={imageslide} />
    //     },
    //     {
    //         key: uuidv4(),
    //         content: <img src={imageslide} />
    //     },
    //     {
    //         key: uuidv4(),
    //         content: <img src={imageslide} />
    //     }
    // ]; /*.map((element, index) => {
    // return { ...element, onClick: () => setGoToSlide(index) };
//   });*/

    return (
        <div className="carousel-container">
            {/*<div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
  </div>*/}
            {/* <Carroussel
                cards={cards}
                height="500px"
                width="90%"
                margin="0 auto"
                offset={2}
                showArrows={true}
            /> */}
            {/* <Carroussel
                cards={cards}
                offset={2}
                showArrows={true}
                width="80%"
                height="400px"
                margin="0 auto"
                autoSlideInterval={3000} // Auto-slide every 5 seconds
            /> */}

            <Carroussel
                cards={[
                    { key: 1, content: <img src={imageslide} alt="Slide 1" className="roundimage"/> },
                    { key: 2, content: <img src={imageslide1} alt="Slide 2" className="roundimage" /> },
                    { key: 3, content: <img src={imageslide2} alt="Slide 3" className="roundimage" /> },
                    
                ]}
                offset={2}
                showArrows={false}
                width="60vw"
                height="400px"
                margin="1rem auto"
                autoSlideInterval={15000} // Auto-slide every 5 seconds
            />

        </div>
    );
}
