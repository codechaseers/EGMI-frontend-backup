import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const Test = () => {

  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
   // console.log(event,"hello check")
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 // console.log(isOpen,"hello check 12")
  return (
    <>
      <div className="popup-wrapper">
        <button onClick={togglePopup}>Open Popup</button>
        {isOpen && (
          // <div className="popup-overlay"> {/*black */}
            <div className="popup-content" ref={popupRef} 
            // onClick={handleInnerClick}
            > {/* white */}
              <p>This is the popup content</p>
              <button className="close-button" onClick={closePopup}>Close</button>
            </div>
          // </div>
        )}
      </div>

      <style>
        {`
  
  .popup-wrapper {
    position: relative;
  }
  
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    position: relative; /* Add relative positioning */
  }
  
  .popup-content p {
    margin: 0;
  }
  
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #ff6347; /* Red color for the close button */
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
  }
  
  
  
  
  `}
      </style>


    </>
  );
};

// MultiRangeSlider.propTypes = {
//   min: PropTypes.number.isRequired,
//   max: PropTypes.number.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default Test;
