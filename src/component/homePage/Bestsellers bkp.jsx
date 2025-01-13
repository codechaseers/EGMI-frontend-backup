// import React, { useState, useEffect } from 'react';
// import brande1 from "../../assets/images/homeslider/brande/brande1.webp"
// import brande2 from "../../assets/images/homeslider/brande/brande1.webp"


// const LogoSlider = () => {
//   const totalLogos = 10; // Total number of logos
//   const [logosToShow, setLogosToShow] = useState(3); // Initial number of logos to show
//   const [currentLogo, setCurrentLogo] = useState(0);

//   useEffect(() => {
//     const updateLogosToShow = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth >= 25000) {
//         setLogosToShow(5);
//       } else if (screenWidth >= 768) {
//         setLogosToShow(4);
//       } else {
//         setLogosToShow(3);
//       }
//     };

//     updateLogosToShow();

//     window.addEventListener('resize', updateLogosToShow);
//     return () => window.removeEventListener('resize', updateLogosToShow);
//   }, []);

//   const nextLogo = () => {
//     setCurrentLogo((currentLogo + 1) % totalLogos);
//   };

//   const prevLogo = () => {
//     setCurrentLogo((currentLogo - 1 + totalLogos) % totalLogos);
//   };


//   return (
//     <>
//     <div className="logo-slider">
//       <button onClick={prevLogo}>Previous</button>
//       <div className="slider-container">
//         <ul className="logo-list" style={{ transform: `translateX(-${currentLogo * 100}%)` }}>
//           <li>
//             <img src={brande1} alt="Logo 1" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 2" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//           <li>
//             <img src={brande1} alt="Logo 3" />
//           </li>
//         </ul>
//       </div>
//       <button onClick={nextLogo}>Next</button>
//     </div>


//     <style>
//         {`
        
//         .logo-slider {
//           width: 80%; /* Adjust as needed */
//           margin: 0 auto;
//           text-align: center;
//         }
        
//         .slider-container {
//           overflow: hidden;
//           position: relative;
//         }
        
//         .logo-list {
//           display: flex;
//           transition: transform 0.5s ease; /* Smooth sliding transition */
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
        
//         .logo-list li {
//           min-width: 100%;
//           flex: 0 0 auto;
//         }
        
//         .logo-list img {
//           width: 100%;
//           height: auto;
//         }
        
//         /* Additional styling for buttons if needed */
//         .logo-slider button {
//           /* Your button styles */
//         }
        
//         `}
//     </style>
//     </>
//   );
// };

// export default LogoSlider;


import React from "react";
import { render } from "react-dom";
import CarouselSlider from "react-carousel-slider";

let data = [
  {
    // des: "1",
    imgSrc: "https://i.imgur.com/L75otV6.jpg",
  },
  {
    // des: "2",
    imgSrc: "https://i.imgur.com/L75otV6.jpg",
  },
  {
    // des: "3",
    imgSrc: "https://i.imgur.com/L75otV6.jpg",
  },
  {
    // des: "4",
    imgSrc: "https://i.imgur.com/L75otV6.jpg",
  },
  {
    // des: "5",
    imgSrc: "https://i.imgur.com/L75otV6.jpg",
  },
];

/* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

let sliderBoxStyle = {
  height: "250px",
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
};


function Bestsellers() {
  return (
      <>
  {/* <CarouselSlider
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
  /> */}

<div className="cardBox">
                    <div className="cardImg"><img src={ItemImg} /><span className="emi_ct">0% EMI</span></div>
                    <div className="cardText">
                        
                        <span className="cardEmi">₹ <span>453</span>/mon</span>
                        <p className="cardItemname"> Airdopes 131 </p>
                        <p className="cardPrice"><span className="reseantPrice">₹899</span> <span className="cardLessPrise"> ₹2,990 </span><span className="priceOf">70% off</span> </p>
                        <p className="des_item">In publishing and graphic design, Lorem ipsum ......</p>
                        {/* <p className="ratingStars">
                            <span className="imgAdRt"><img src={Star} />4.8</span>
                            <span className="line_card"> | </span>
                            <span className="ratingAdq"><span className="ratingComt">1336</span> <img className="blueTick" src={blueTick} /></span>
                        </p> */}
                    </div>
                </div>
                

  </>
  )
  };

export default Bestsellers;
