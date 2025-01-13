import React, { useState, useEffect } from 'react';
import Hed from "./hed"

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position to determine if the header should stick
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <>
    <div className="header_mobile">
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        {/* Your header content goes here */}
        <Hed />
      </header>
      {/* Additional content */}
      {/* <div style={{ height: '1500px' }}>Scroll down...</div> */}
    </div>
     <style>

     {` 
     .header {
        background-color: #fff;
        transition: all 0.3s ease;
    }
      
      .header.sticky {
        position: fixed;
        top: -1px;
        width: 100%;
        z-index: 1000;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }



     `}
   </style>

 </>
  );
};

export default StickyHeader;
