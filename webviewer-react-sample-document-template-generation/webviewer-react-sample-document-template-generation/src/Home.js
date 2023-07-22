import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    image: "https://i.ibb.co/nkC1rcB/landing-page.png" // Image link for the first div
  },
  {
    image: "https://c4.wallpaperflare.com/wallpaper/307/345/278/scales-wallpaper-preview.jpg", // Image link for the second div
    buttonLabel: "Search",
    buttonLink: "/search"
  },
  {
    image: "https://e0.pxfuel.com/wallpapers/835/828/desktop-wallpaper-lawyer-law-firm.jpg", // Image link for the third div
    buttonLabel: "Notes",
    buttonLink: "/notes"
  },
  {
    image: "https://w0.peakpx.com/wallpaper/608/604/HD-wallpaper-themis-statuette-of-justice-court-of-law-lawyers-statuette-of-themis-law-scales-of-justice.jpg", // Image link for the fourth div
    buttonLabel: "Doc Generator",
    buttonLink: "/document-generator"
  },
  {
    image: "https://ibb.co/uvw987", // Image link for the fifth div
    buttonLabel: "Chatbot",
    buttonLink: "http://127.0.0.1:5006/"
  }
];

const Home = () => {
  const itemsRef = useRef([]);
  itemsRef.current = [];

  gsap.to(".logo-image", {
    x: "100%", // Move the image 100% to the right
    scrollTrigger: {
      trigger: ".logo-image",
      start: "top 50%", // Start the animation when the top of the image reaches the middle of the viewport
      end: "bottom top", // End the animation when the bottom of the image reaches the top of the viewport
      scrub: 0.5, // Adjust the speed of the animation
      pin: true // Pin the image to the viewport while scrolling
    }
  });

  useEffect(() => {
    itemsRef.current.map((item, index) => {
      gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" // Set initial clipPath for left-to-right motion
        },
        {
          duration: 0.5,
          autoAlpha: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Final clipPath for full reveal
          scrollTrigger: {
            trigger: item,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };

  return (
    <div className="main-container" style={{ position: "relative", width: "100%" }}>
      {/* Scrollable image sections */}
      {data.map(({ image, buttonLabel, buttonLink }, index) => {
        const buttonStyles = {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          background: "brown",
          color: "white",
          padding: "10px 20px",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "5px"
        };

        // First div with 100% width and height
        if (index === 0) {
          return (
            <div
              key={index}
              style={{
                width: "100%", // Set 100% width for the first div
                height: "100vh", // Full viewport height for the first div
                position: "relative",
                background: "#E5C78F",
              }}
            >
              <div className="image-container" style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-start", position: "absolute", top: 0, left: 0 }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <img src={image} alt="" className="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} ref={addToRefs} />
                  <img src="https://i.ibb.co/Rcwp2nr/justice-Background-Removed.png" alt="Overlay Image" style={{ position: "absolute", top: "60px", left: "280px", width: "", height: "100%", objectFit: "cover" }} />
                  <img src="https://i.ibb.co/nRy1jzP/logo-removebg-preview.png" alt="Logo" className="logo-image" style={{ position: "absolute", top: "50%", left: "70%", transform: "translate(-50%, -50%)", maxWidth: "1000px", maxHeight: "100vh", objectFit: "contain", zIndex: 2 }} />
                </div>
              </div>
            </div>
          );
        }

        // Second and fourth div with 100% width and background color
        if (index === 1 || index === 3) {
          return (
            <div
              key={index}
              style={{
                width: "100%", // Set 100% width for the divs
                height: "100vh", // Full viewport height for all divs
                position: "relative",
                background: "#E5C78F",
              }}
            >
              <div className="image-container" style={{ width: "50%", height: "100%", display: "flex", alignItems: "flex-start", position: "absolute", top: 0, left: 0 }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <img src={image} alt="" className="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} ref={addToRefs} />
                </div>
              </div>
              
              <Link to={buttonLink} className="button" style={{ ...buttonStyles, right: "10%" }}>
                {buttonLabel}
              </Link>
            </div>
          );
        }

        // Third div with 100% width and background color
        if (index === 2) {
          return (
            <div
              key={index}
              style={{
                width: "100%", // Set 100% width for the div
                height: "100vh", // Full viewport height for the div
                position: "relative",
                background: "#E5C78F",
              }}
            >
              <div className="image-container" style={{ width: "50%", height: "100%", display: "flex", alignItems: "flex-start", position: "absolute", top: 0, right: 0 }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <img src={image} alt="" className="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} ref={addToRefs} />
                </div>
              </div>
            
              <Link to={buttonLink} className="button" style={{ ...buttonStyles, left: "10%" }}>
                {buttonLabel}
              </Link>
              
            </div>
          );
        }

        // Fifth div with 100% width and background color
        if (index === 4) {
          return (
            <div
              key={index}
              style={{
                width: "100%", // Set 100% width for the div
                height: "100vh", // Full viewport height for the div
                position: "relative",
                background: "#E5C78F",
              }}
            >
              {/* Image on the right */}
              <div className="image-container" style={{ width: "50%", height: "100%", display: "flex", alignItems: "flex-start", position: "absolute", top: 0, left: 0 }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <img src={image} alt="" className="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} ref={addToRefs} />
                </div>
              </div>

              {/* Button on the left */}
              <Link to={buttonLink} className="button" style={{ ...buttonStyles, left: "50%", transform: "translateX(-50%)" }}>
                {buttonLabel}
              </Link>

              {/* Customized h1 and p */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              
              </div>
            </div>
          );
        }

        // Other divs with 100% width and background color
        return (
          <div
            key={index}
            style={{
              width: "100%", // Set 100% width for the divs
              height: "100vh", // Full viewport height for all divs
              position: "relative",
              background: "#E5C78F",
            }}
          >
            <div className="image-container" style={{ width: "50%", height: "100%", display: "flex", alignItems: "flex-start", position: "absolute", top: 0, left: 0 }}>
              <div style={{ width: "100%", height: "100%" }}>
                <img src={image} alt="" className="image" style={{ width: "100%", height: "100%", objectFit: "cover" }} ref={addToRefs} />
              </div>
            </div>
           
            <Link to={buttonLink} className="button" style={{ ...buttonStyles, right: "10%" }}>
              {buttonLabel}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
