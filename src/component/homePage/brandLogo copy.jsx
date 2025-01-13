import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import apple from "../../assets/images/homeSlider/brandLogo/apple.png"
import boat from "../../assets/images/homeSlider/brandLogo/boat.png"
import fireBoltt from "../../assets/images/homeSlider/brandLogo/fireBoltt.png"
import mi from "../../assets/images/homeSlider/brandLogo/mi.png"
import noise from "../../assets/images/homeSlider/brandLogo/noise.png"
import oppo from "../../assets/images/homeSlider/brandLogo/oppo.png"
import realme from "../../assets/images/homeSlider/brandLogo/realme.png"
import samsung from "../../assets/images/homeSlider/brandLogo/samsung.png"
import vivo from "../../assets/images/homeSlider/brandLogo/vivo.png"

import { Link, } from "react-router-dom";


function brandLogo() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <h2 className="ExploreBestsellers">Explore <b>Brands</b></h2>
            <div className=" BrandLogo_slider">

                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
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

                    <div className="mydiv">
                        <Link to="/apple">
                            <img src={apple} /><p>Apple</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/boat">
                            <img src={boat} /><p>Boat</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/wireless-earbuds">
                            <img src={fireBoltt} /><p>Fire Boltt</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/wireless-earphones">
                            <img src={mi} /><p>Mi</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/wireless-speakers">
                            <img src={noise} /><p>Noise</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/wireless-speakers">
                            <img src={oppo} /><p>Oppo</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/wireless-speakers">
                            <img src={realme} /><p>Realme</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/wireless-speakers">
                            <img src={samsung} /><p>Samsung</p>
                        </Link>
                    </div>
                    <div className="mydiv">
                        <Link to="/wireless-speakers">
                            <img src={vivo} /><p>Vivo</p>
                        </Link>
                    </div>

                </Carousel>
            </div>
            <style>
                {`
               .BrandLogo_slider {
                width: 100%;
                margin: 0 auto;
                margin-bottom: 25px;
                padding-bottom: 15px;
            }
            .BrandLogo_slider ul.react-multi-carousel-track {
                margin: 3% 0;
            }
            .BrandLogo_slider ul.react-multi-carousel-track li.react-multi-carousel-item {
                width: 10% !important;
                margin-right: 0.5%;
            }
                .BrandLogo_slider .mydiv {
                    width: 160px;
                    border: 1px solid;
                    margin-right: 1%;
                    border-radius: 15px;
                }
                .BrandLogo_slider .mydiv:nth-last-child(1) {
                    margin-right: 0;
                }
                .BrandLogo_slider .mydiv img {
                    width: 70px;
                    height: 50px;
                    border-radius: 20px;
                }
                .BrandLogo_slider .mydiv a {
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    padding: 4px 0px;
                }
                `}
            </style>
        </>
    );
}
export default brandLogo;
