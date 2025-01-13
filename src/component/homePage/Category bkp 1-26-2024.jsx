import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import RockerzHeadphones from "../../assets/images/homeSlider/brande/RockerzHeadphones.png"
import Phones from "../../assets/images/homeSlider/brande/phone.png"
import Smartwatches from "../../assets/images/homeSlider/brande/Smartwatches.png"
import WirelessEarbuds from "../../assets/images/homeSlider/brande/WirelessEarbuds.png"
import WirelessEarphones from "../../assets/images/homeSlider/brande/WirelessEarphones.png"
import WirelessSpeakers from "../../assets/images/homeSlider/brande/WirelessSpeakers.png"
import Showscreen from "../../assets/images/homeSlider/brande/showscreen.png"
import { Link, } from "react-router-dom";
import { useState,useEffect } from "react";


function Category() {
  const [swipe, setSwipe] = useState(true);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
   // ==========  onditional swiping logic  ============
   useEffect(()=>{
    if(window.screen.width >900){
      setSwipe(false)
    
    }
  })
  return (
    <>
      <h2 className="ExploreBestsellers">Explore <b>Category</b></h2>
      <div className="cardsBoxBody">
        <Carousel 
        //  swipeable={swipe}
        //  draggable={swipe}
        //  showDots={false}
        //  responsive={responsive}
        //  ssr={true} // means to render carousel on server-side.
        //  infinite={true}
        // //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
        //  autoPlaySpeed={1000}
        //  keyBoardControl={true}
        //  customTransition="all .5"
        //  transitionDuration={500}
        //  containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
        // //  deviceType={this.props.deviceType}
        //  dotListClass="custom-dot-list-style"
        //  itemClass="carousel-item-padding-40-px"


         swipeable={swipe}
         draggable={swipe}
         showDots={false}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={false}
         //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
         autoPlaySpeed={1000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
        //  removeArrowOnDeviceType={["tablet", "mobile"]}
         //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
        
        >

          
          {/* <div className="mydiv show_screen">
            <Link to="/rockerz-headphones">
              <img src={Showscreen} /><p>Rockerz Headphones</p>
            </Link>
          </div>   */}
            
         
          <div className="cardsBoxBody">
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
               "Smart Phones"
              )}&offer=${encodeURIComponent( JSON.stringify({"category":"Smart Phones"}))}`}>
              <img src={Phones} /><p>Smart Phone</p>
            </Link>
          </div>
   
          <div className="cardsBoxBody">
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
               "Smart Watches"
              )}&offer=${encodeURIComponent( JSON.stringify({"category":"Smart Watches"}))}`}>
              <img src={Smartwatches} /><p>Smart watches</p>
            </Link>
          </div>
          <div className="cardsBoxBody">
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
               "EarBuds"
              )}&offer=${encodeURIComponent( JSON.stringify({"category":"EarBuds"}))}`}>
              <img src={WirelessEarbuds} /><p>Wireless Earbuds</p>
            </Link>
          </div>
          <div className="cardsBoxBody">
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
               "NeckBands"
              )}&offer=${encodeURIComponent( JSON.stringify({"category":"NeckBands"}))}`}>
              <img src={WirelessEarphones} /><p>Wireless Earphones</p>
            </Link>
          </div>

        
        </Carousel>
      </div>
      {/* <style>
        {`
  h2.ExploreBestsellers {
    color: #1A2024;
    font-size: 24px;
    text-align: left;
    width: 100;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 15px;
}
h2.ExploreBestsellers a {
  float: right;
  border-bottom: 1px solid;
  font-size: 20px;
}
.slider_container {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2em;
}
.slider_container ul.react-multi-carousel-track {
width: 100%;
}
.slider_container ul.react-multi-carousel-track li.react-multi-carousel-item {
  height: 100%;
  display: table;
  margin-right: 1.5%;
}
.slider_container ul.react-multi-carousel-track li.react-multi-carousel-item:nth-child(4) {
  margin-right: 0;
}
.slider_container ul.react-multi-carousel-track a {
  width: 100%;
  display: table;
}
.slider_container .mydiv.show_screen {
  opacity: 0.5;
}
.slider_container .mydiv.show_screen p {
  color: transparent;
  background-color: #a5a5a5;
}
.slider_container .mydiv {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.319);
  background: #f8f6f6;
  height: 100%;
  width: 22em;
  text-align: center;
}
.slider_container ul.react-multi-carousel-track img {
  width: 100%;
}
.slider_container .mydiv p {
  font-weight: 600;
  margin: 7px 0;
  display: table;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 1090px) {
  .slider_container .mydiv {
    width: 20.6em;
}

@media only screen and (max-width: 540px) {
  .slider_container .mydiv {
    width: 14.6em;
}

}
  `}
      </style> */}
    </>
  );
}
export default Category;
