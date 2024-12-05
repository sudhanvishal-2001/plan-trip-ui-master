import React, { useEffect, useState } from "react";
import bg1 from "./Assets/page2bg.svg";
import bg2 from "./Assets/page2bg2.svg";
import logo from "./Assets/logo.svg";
import profilelogo from "./Assets/profilelogo.svg";
import belllogo from "./Assets/belllogo.svg";
import svgplan from "./Assets/svgplan.svg";
import scimg1 from "./Assets/scimg1.png";
import scimg2 from "./Assets/scimg2.png";
import scimg3 from "./Assets/scimg3.png";
import mcv1 from "./Assets/mcv1.png";
import mcv2 from "./Assets/mcv2.png";
import mcv3 from "./Assets/mcv3.png";
import bg11 from './Assets/bg1.png';
import bg21 from './Assets/bg2.svg';
import { FirstPage } from "./Components/FirstPage";
import { LandingPage } from "./Components/LandingPage";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import './Styles/LandingPage.css';
import { CgProfile } from "react-icons/cg";
import { MdTranslate } from "react-icons/md";

function App() {
  const imagesToLoad = [
    bg11,
    bg21,
    bg1,
    bg2,
    logo,
    profilelogo,
    belllogo,
    svgplan,
    scimg1,
    scimg2,
    scimg3,
    mcv1,
    mcv2,
    mcv3,
  ];
  const [imageLoad, setImageLoad] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showFirstPage, setShowFirstPage] = useState(true);
  useEffect(() => {
    // Preload images
    const preloadImages = (imageUrls) => {
      return Promise.all(
        imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    preloadImages(imagesToLoad)
      .then(() => {
        console.log("Images preloaded");
        setImageLoad(true)
      })
      .catch((err) => console.error("Image preload failed:", err));

    // Set a timeout of 6 seconds to move to the next component
    const timeout = setTimeout(() => {
      // Trigger transition logic here
      setShowLandingPage(true);
      // window.location.hash = '#firstPage';  // Example action to "move" to FirstPage
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [imagesToLoad]);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setShowFirstPage(false);
    }, 6000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="app-container">
      {imageLoad &&
        <>
          <img className="logo" src={logo} alt="Logo" />
          <div className="profilelogo">
            <CgProfile className="CgProfile" />
          </div>
          <img className="belllogo" src={belllogo} alt="Bell Logo" />

          <AnimatePresence initial={false} >
            {showFirstPage && <motion.div
              key="landingPage"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: "-100%",        // Slide up
                opacity: 0,          // Fade out
                transition: {
                  y: { duration: 0 },  // Slide transition duration
                  opacity: { duration: 0, delay: 0 }  // Fade transition happens after slide
                }
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <LandingPage />
            </motion.div>}
            {showLandingPage && <motion.div
              key="firstPage"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}
            >
              <FirstPage />
            </motion.div>}
          </AnimatePresence>
        </>
      }
    </div>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './Layout';
// import Home from './Home';
// import { FirstPage } from './Components/FirstPage';
// import { LandingPage } from "./Components/LandingPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/home" element={<FirstPage />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
