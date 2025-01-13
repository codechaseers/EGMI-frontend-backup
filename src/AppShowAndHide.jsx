import React, { useState, useEffect } from 'react';
// const App = () => {

const Show_hide = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const handleToggle = () => {
    setShowDiv(!showDiv);
  };
  const HandleResize = () => {
    setIsDesktop(window.innerWidth > 992);
    if (window.innerWidth <= 992) {
    if (window.innerWidth <=992) {
      setShowDiv(true);
    }
  };
  useEffect(()=>{
    HandleResize()
  },[])
  
  // window.addEventListener('resize', handleResize);
 
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
 

  return (
    <div>
      {isDesktop && (
        <button onClick={handleToggle}>
          {showDiv ? 'Hide Div' : 'Show Div'}
        </button>
      )}
      {!isDesktop && (
        <button onClick={handleToggle}>
          {showDiv ?'Show Div' : 'Hide Div'}
        </button>
      )}
      {showDiv && (
        <div>
          <p>This is the div content</p>
        </div>
      )}
    </div>
  );
};
}

export default Show_hide
