import React, { useState, useRef } from 'react';
import logo1 from "../src/assets/images/homeSlider/brande/RockerzHeadphones.png"
import logo2 from "../src/assets/images/homeSlider/brande/Smartwatches.png"
import logo3 from "../src/assets/images/homeSlider/brande/WirelessEarbuds.png"

const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const sliderRef = useRef(null);

  const itemWidth = 20; // Assuming 5 items at a time (100 / 5)

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const dragDistance = dragStartX - sliderRef.current.getBoundingClientRect().left;
    const itemsDragged = Math.round(dragDistance / (itemWidth * window.innerWidth / 100));
    const newIndex = Math.max(0, Math.min(currentIndex - itemsDragged, 2)); // Assuming 3 sets of 5 items (0, 1, 2)
    setCurrentIndex(newIndex);
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const dragOffset = e.clientX - dragStartX;
      sliderRef.current.style.transform = `translateX(-${currentIndex * itemWidth * 100}%) translateX(${dragOffset}px)`;
    }
  };

  const handleGoToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1)); // Assuming 3 sets of 5 items (0, 1, 2)
  };

  const handleGoToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Assuming 3 sets of 5 items (0, 1, 2)
  };
  return (
    <>
      <div
        className="logo-slider-container"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
        onMouseLeave={handleDragEnd}
      >

        <div
          className="arrows left-arrow"
          onClick={handleGoToPrevious}
        >
          &lt;
      </div>

        <div
          className="logo-slider"
          ref={sliderRef}
          style={{
            width: `${itemWidth * 5 * 100}%`, // Assuming 5 items at a time
            transform: `translateX(-${currentIndex * itemWidth * 100}%)`
          }}
        >
          <div className="logo-slide">
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
            <img src={logo1} alt="Logo 4" />
            <img src={logo2} alt="Logo 5" />
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
            <img src={logo1} alt="Logo 4" />
            <img src={logo2} alt="Logo 5" />
          </div>
          {/* Repeat the above structure for the next set of 5 items */}
          {/* Add more sets of 5 items as needed */}
        </div>

        <div
          className="arrows right-arrow"
          onClick={handleGoToNext}
        >
          &gt;
      </div>
      </div>

      <style>
        {`
      
      .logo-slider-container {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      
      .logo-slider {
        display: flex;
        transition: transform 0.3s ease-in-out;
      }
      
      .logo-slide {
        flex: 0 0 20%; 
        box-sizing: border-box;
        padding: 0 10px; 
      }
      
      .logo-slide img {
        width: 100%;
        height: auto;
      }
      
      .arrows {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
      }
      
      .arrow {
        cursor: pointer;
      }


      `}
      </style>

    </>
  );
};

export default App;