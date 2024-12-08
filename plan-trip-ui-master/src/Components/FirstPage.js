import React, { useState, useEffect } from "react";
import "../Styles/FirstPage.css";
import bg1 from "../Assets/page2bg.svg";
import bg2 from "../Assets/page2bg2.svg";
import logo from "../Assets/logo.svg";
import profilelogo from "../Assets/profilelogo.svg";
import belllogo from "../Assets/belllogo.svg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import svgplan from "../Assets/svgplan.svg";
import scimg1 from "../Assets/scimg1.png";
import scimg2 from "../Assets/scimg2.png";
import scimg3 from "../Assets/scimg3.png";
import mcv1 from "../Assets/mcv1.png";
import mcv2 from "../Assets/mcv2.png";
import mcv3 from "../Assets/mcv3.png";
import { MdClose, MdKeyboardDoubleArrowRight } from "react-icons/md";
import ExpandIcon from "../Assets/expand-icon.svg"
import MessageIcon from "../Assets/message-icon.svg"
import SearchIcon from "../Assets/search-icon.svg"
import StarFallIcon from "../Assets/star-fall-icon.svg"
import BulbIcon from "../Assets/bulb-icon.svg"
import CloseIcon from "../Assets/close-icon.svg"
import { CgProfile } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import ExpanbarIcon from "../Assets/expand-bar-icon.svg"
import Carousel_new from './Carousel_new'
import iconicCities from "../Assets/iconicCities.png";
import houseboat from "../Assets/houseboat.png";
// import mcv3 from "../img1/mcv3.png";
import vaccationIcon from "../Assets/vaccation-icon.svg";
import mountain from "../Assets/Mountain.png";
import desert from "../Assets/desert.png";

export const FirstPage = () => {
  const [activeView, setActiveView] = useState("single");
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);
  const [direction, setDirection] = useState("");

  const cardDetails = [
    {
      singlecityview: {
        bg: "bg1",
        details: [
          {
            img: scimg1,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Kyoto, Japan",
            views: "10000",
            visits: "1.33M",
            link: "5",
          },
          {
            img: scimg2,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Osaka, Japan",
            views: "20000",
            visits: "1.5M",
            link: "4",
          },
          {
            img: scimg3,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Hiroshima, Japan",
            views: "30000",
            visits: "850,000",
            link: "3",
          },
        ],
      },
    },
    {
      multicityview: {
        bg: "bg2",
        details: [
          {
            img: mcv1,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Reo, Japan",
            views: "10000",
            visits: "1.35M",
            link: "5",
          },
          {
            img: mcv2,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Kenya, Japan",
            views: "20000",
            visits: "1.5M",
            link: "4",
          },
          {
            img: mcv3,
            title: "Experience Japan’s timeless temples and cherry blossoms",
            location: "Hiroshima, Japan",
            views: "30000",
            visits: "850,000",
            link: "3",
          },
        ],
      },
    },
  ];

  


  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const [activeIcon, setActiveIcon] = useState(null);
  

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };


  const moveNext = () => {
    setDirection("right"); // Set direction to right
    setCurrentIndexes((prevIndexes) => {
      const data =
        activeView === "single"
          ? cardDetails[0].singlecityview.details
          : cardDetails[1].multicityview.details;
      const updatedIndexes = prevIndexes.map((index) => (index + 1) % data.length);
      return updatedIndexes;
    });

    setTimeout(() => {
      setDirection(""); // Reset direction to allow for smooth animation transition
    }, 500);
  };

  const movePrevious = () => {
    setDirection("left"); // Set direction to left
    setCurrentIndexes((prevIndexes) => {
      const data =
        activeView === "single"
          ? cardDetails[0].singlecityview.details
          : cardDetails[1].multicityview.details;
      const updatedIndexes = prevIndexes.map(
        (index) => (index - 1 + data.length) % data.length
      );
      return updatedIndexes;
    });

    setTimeout(() => {
      setDirection(""); // Reset direction to allow for smooth animation transition
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(moveNext, 4000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeView, currentIndexes]);

  const viewData =
    activeView === "single" ? cardDetails[0].singlecityview.details : cardDetails[1].multicityview.details;

  const backgroundImage = activeView === "single" ? bg1 : bg2;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIcons = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      {/* <div className="fp-bg1">
        <img src={backgroundImage} alt="Background 1" />
      </div> */}

      <AnimatePresence>
        <motion.div
          key={backgroundImage} // Ensures a new animation for every background change
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Fade out the old background
          transition={{ duration: 0.8 }} // Smooth transition
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: "0vh",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            overflow: "hidden",
          }}
        ></motion.div>
      </AnimatePresence>
      <div className={`toggle-container ${activeView === 'multi' ? 'multi' : ''}`}>
        <button
          className={`toggle-button ${activeView === 'single' ? 'active' : ''}`}
          onClick={() => setActiveView('single')}
        >
          Single city View
        </button>
        <button
          className={`toggle-button ${activeView === 'multi' ? 'active multi' : ''}`}
          onClick={() => setActiveView('multi')}
        >
          Multi city View
        </button>
      </div>

      {/* <ImageSlider
        viewData={viewData}
        currentIndexes={currentIndexes}
        direction={direction}
      /> */}

      <Carousel_new />

     


      {/* <div className="fp-pyt">
        <img src={svgplan} alt="direction" />
        <p className=" Roboto-text-mini">Plan Your Trip</p>
      </div> */}

      <div class="button-plan">
        <span class="button-icon">
          <img src={svgplan} alt="direction" className="icon-size-sm" />
        </span>
        <p className=" Roboto-text-mini">Plan Your Trip</p>
      </div>

        

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebarcontent">
        <button className="closebtn" onClick={closeSidebar}>
          <img src={CloseIcon} />
        </button>
        <div className="sidebar-contents">
          <div className="scrollable-icons">
            <div
              className={`icon-sidebar-container ${activeIcon === 'beaches' ? 'active' : ''}`}
              onClick={() => handleIconClick('beaches')}
            >
              <img src={vaccationIcon} className="icon-size-lg" />
              <span className="Helvetica-text-icon">Beaches</span>
            </div>
            <div
              className={`icon-sidebar-container ${activeIcon === 'deserts' ? 'active' : ''}`}
              onClick={() => handleIconClick('deserts')}
            >
              <img src={desert} className="icon-size-lg" />
              <span className="Helvetica-text-icon">Deserts</span>
            </div>
            <div
              className={`icon-sidebar-container ${activeIcon === 'mountains' ? 'active' : ''}`}
              onClick={() => handleIconClick('mountains')}
            >
              <img src={mountain} className="icon-size-lg" />
              <span className="Helvetica-text-icon">Mountains</span>
            </div>
            <div
              className={`icon-sidebar-container ${activeIcon === 'iconicCities' ? 'active' : ''}`}
              onClick={() => handleIconClick('iconicCities')}
            >
              <img src={iconicCities} className="icon-size-lg" />
              <span className="Helvetica-text-icon">Iconic cities</span>
            </div>
            <div
              className={`icon-sidebar-container ${activeIcon === 'houseboats' ? 'active' : ''}`}
              onClick={() => handleIconClick('houseboats')}
            >
              <img src={houseboat} className="icon-size-lg" />
              <span className="Helvetica-text-icon">Houseboats</span>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className={`sidebararrow ${isOpen ? 'hide' : ''}`} onClick={toggleSidebar}>
        {/* <MdKeyboardDoubleArrowRight className="sidearrowicon" />
         */}
        <img src={ExpanbarIcon} className="sidearrowicon" />
      </div>

      <div className="icon-container-side">
        <div className="beforemain">
          <div className={`main-icon ${activeView === 'single' ? 'bg-icon' : 'bg-icon-shade'} `} style={{ transform: "translateY(0.6rem)" }}>
            <img src={SearchIcon} />
          </div>
        </div>
      </div>
      <div className="icon-container">
        <div className={`additional-icon icon1 add-bg-icon ${isExpanded ? "visible bouncing" : ""}`}  >
          <img src={BulbIcon} />
        </div>
        <div className={`additional-icon  icon2 add-bg-icon  ${isExpanded ? "visible bouncing" : ""}`}  >
          <img src={StarFallIcon} />
        </div>
        <div className="main-icon add-bg-icon ${activeView === 'single' ? 'bg-icon' : 'bg-icon-shade'} " style={{ transform: "translateY(-1rem)" }}>
          <img src={MessageIcon} />
        </div>
        <div className={`main-icon  ${activeView === 'single' ? 'bg-icon' : 'bg-icon-shade'} ${isExpanded ? "visible " : ""}`} onClick={toggleIcons}>
          <img src={ExpandIcon} />
        </div>
        <div className={`close-icon  ${isExpanded ? "" : "visible"}`} style={{ transform: "translateY(-3rem)" }} onClick={toggleIcons}>
          <img src={CloseIcon} />
        </div>
      </div>

    </div>

  );
};