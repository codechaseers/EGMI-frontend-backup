import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/images/homeSlider/Web_Banner_9.png";
import slide2 from "../../assets/images/homeslider/Web_Banner_8.png";
import slide3 from "../../assets/images/homeslider/Web_Banner_10.png";
import slide4 from "../../assets/images/homeslider/Web_Banner_11.png";
import { NavLink } from "react-router-dom";
function IndividualIntervalsExample() {
  let Offer;
  let Heading = "Earbuds @ ₹49 ";
  return (
    <>
      <Carousel className="sliderHome">
        <Carousel.Item interval={2000}>
          <NavLink
            to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              (Heading = "Earbuds @ 49")
            )}&offer=${encodeURIComponent(
              (Offer = JSON.stringify({
                downPayment: "49",
                category: "EarBuds",
                sort: "Featured"
              }))
            )}`}
          >
            <img className="sliderHomeimg" src={slide1}></img>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <NavLink
            to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              (Heading = "Smart Phones Grab @ 249")
            )}&offer=${encodeURIComponent(
              (Offer = JSON.stringify({
                downPayment: "249",
                category: "Smart Phones",
                sort: "Featured"
              }))
            )}`}
          >
            <img className="sliderHomeimg" src={slide2}></img>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <NavLink
            to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              (Heading = "Neck Bands Grab @ 49")
            )}&offer=${encodeURIComponent(
              (Offer = JSON.stringify({
                downPayment: "49",
                category: "NeckBands",
                sort: "Featured"
              }))
            )}`}
          >
            <img className="sliderHomeimg" src={slide3}></img>
          </NavLink>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <NavLink
            to={`/wireless-earbuds/?&heading=${encodeURIComponent(
              (Heading = "Smart Watches Grab @ 49")
            )}&offer=${encodeURIComponent(
              (Offer = JSON.stringify({
                downPayment: "49",
                category: "Smart Watches",
                sort: "Featured"
              }))
            )}`}
          >
            <img className="sliderHomeimg" src={slide4}></img>
          </NavLink>
        </Carousel.Item>
      </Carousel>
      <style>
        {`
    @media only screen and (max-width: 767px) {
    .sliderHome {
      margin-top: 50px;
  }
}
    `}
      </style>
    </>
  );
}

export default IndividualIntervalsExample;
