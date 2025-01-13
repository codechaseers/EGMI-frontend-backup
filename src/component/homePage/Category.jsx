import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import Phones from "../../assets/images/homeSlider/brande/phone.png"
import Smartwatches from "../../assets/images/homeSlider/brande/Smartwatches.png"
import WirelessEarbuds from "../../assets/images/homeSlider/brande/WirelessEarbuds.png"
import WirelessEarphones from "../../assets/images/homeSlider/brande/WirelessEarphones.png"

function Deals49Now({ Product, Title, Heading, Offer }) {

  const category = [
    Phones, Smartwatches, WirelessEarbuds, WirelessEarphones
  ]

  const [swipe, setSwipe] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1224, min: 640 },
      items: 3.4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2.3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // ==========  onditional swiping logic  ============
  useEffect(() => {
    if (window.screen.width > 900) {
      setSwipe(false);
    }
  });

  //   })
  //
  // if(Product.success==true)console.log(Product.allProducts);

  return (
    <>

      <h2 className="ExploreBestsellers">Explore <b>Category</b></h2>

      <div className="cardsBoxBody">
        <Carousel
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //  deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >


          <div >
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              "Smart Phones"
            )}&offer=${encodeURIComponent(JSON.stringify({ "category": "Smart Phones" }))}`}>
              <img src={Phones} /><p className="categoryText">Smart Phone</p>
            </Link>
          </div>

          <div >
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              "Smart Watches"
            )}&offer=${encodeURIComponent(JSON.stringify({ "category": "Smart Watches" }))}`}>
              <img src={Smartwatches} /><p className="categoryText">Smart watches</p>
            </Link>
          </div>
          <div >
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              "EarBuds"
            )}&offer=${encodeURIComponent(JSON.stringify({ "category": "EarBuds" }))}`}>
              <img src={WirelessEarbuds} /><p className="categoryText">Wireless Earbuds</p>
            </Link>
          </div>
          <div >
            <Link to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              "NeckBands"
            )}&offer=${encodeURIComponent(JSON.stringify({ "category": "NeckBands" }))}`}>
              <img src={WirelessEarphones} /><p className="categoryText">Wireless Earphones</p>
            </Link>
          </div>
          


          {/* {category.map((img) => (
                    <img key={img} src={img} alt={img} className="bulkImage" />
                  ))} */}



        </Carousel>
      </div>
      <style>
        {` h2.ExploreBestsellers {
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
                
                .react-multi-carousel-track li.react-multi-carousel-item {
                    margin-right: 0.1%;
                }
                .cardsBoxBody img {
                  width: 100%;
                
              }
              .cardsBoxBody p.categoryText{
                font-weight: 600;
                margin: 7px 0;
                display: table;
                text-align: center;
                width: 100%;
              }
                `}
      </style>
    </>
  );
}
export default Deals49Now;
