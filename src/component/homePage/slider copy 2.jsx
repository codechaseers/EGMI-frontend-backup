import slide1 from "../../assets/images/homeSlider/Web_Banner_1.png";
import slide2 from "../../assets/images/homeslider/Web_Banner_2.png";
import slide3 from "../../assets/images/homeslider/Web_Banner_3.png";
import slide5 from "../../assets/images/homeslider/Web_Banner_5.gif";
import slide6 from "../../assets/images/homeslider/Web_Banner_6.jpg";
import slide7 from "../../assets/images/homeslider/Web_Banner_7.png";
// import slideM1 from "../../assets/images/homeslider/mobile/mobile-1.webp"
// import slideM2 from "../../assets/images/homeslider/mobile/mobile-2.webp"
// import slideM3 from "../../assets/images/homeslider/mobile/mobile-3.webp"
import { NavLink } from "react-router-dom";

function HoleSloder() {
  return (
    <>
      {/* Home slider only work desktop when you want to open in tablat to use get for met  */}

      <div
        id="carouselExampleIndicators"
        className="carousel_home_slide carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item">
            {/* here is slider image  */}
            <NavLink  to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                "Smart Phones"
              )}&offer=${encodeURIComponent(
                JSON.stringify({ category: "Smart Phones", downPayment: "49", }  )
              )}`}>
            <img src={slide7} className=" w-100 desktop_time" />
            </NavLink>
            {/* <img src={slideM3} className=" w-100 mobile_time" /> */}
            {/* here is slider text  */}
            {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
          </div>
          <div className="carousel-item active">
            {/* here is slider image  */}
            <NavLink
              to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                "EarBuds"
              )}&offer=${encodeURIComponent(
                JSON.stringify({ category: "EarBuds", downPayment: "49", }  )
              )}`}
            >
              <img src={slide1} className=" w-100 desktop_time" />
            </NavLink>
            {/* <img src={slideM1} className=" w-100 mobile_time" /> */}
            {/* here is slider text  */}
            {/* <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
          </div>
          <div className="carousel-item">
            {/* here is slider image  */}
            <NavLink to={`/wireless-earbuds/?&heading=${encodeURIComponent(
                "Smart Watches"
              )}&offer=${encodeURIComponent(
                JSON.stringify({ category: "Smart Watches", downPayment: "49", }  )
              )}`} >
            <img src={slide2} className=" w-100 desktop_time" />
            </NavLink>
            {/* <img src={slideM2} className=" w-100 mobile_time" /> */}
            {/* here is slider text  */}
            {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
          </div>
         
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <style>
        {`
                .carousel_home_slide {
                    z-index: 0;
                }
    .carousel-control-next, .carousel-control-prev{
        display: block!important;
        position: absolute;
        top: 47%;
        bottom: unset;
        opacity: 1;
        transform: translateY(-50%);
        border-radius: 50% !important;
        background: #1a2024;
        border: 0;
        outline: none;
        box-shadow: none;
        width: 40px;
        height: 40px;
        visibility: visible;
        padding: 5px;
    }
    .carousel-control-prev{
        left:25px;
    }
    .carousel-control-next{
    right: 25px;
    }
    .mobile_time {
        display: none ;
    }

    @media only screen and (max-width: 768px) {
        .mobile_time {
            display: block ;
        }
         .carousel_home_slide button.carousel-control-prev, .carousel_home_slide button.carousel-control-next {
            display: none !important;
        }
        , .header {
            background-color: #000 !important;
        }
        .header.sticky{
            background-color: #fff;
        }
        .header_mobile {
            position: fixed;
            width: 100%;
            z-index: 9;
        }
        .header.sticky i.fa {
            color: #000;
        }
        .header.sticky span.navbar-toggler-icon {
            filter: unset;
        }
        .header.sticky span.close_x {
            color: #000;
        }

        header.header nav.navbar {
            padding: 0;
        }
        .carousel_home_slide {
            margin-top: 44px;
        }
    }
   
    
    `}
      </style>
    </>
  );
}
export default HoleSloder;
