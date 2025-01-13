import slide1 from "../../assets/images/homeSlider/hts1.webp"
import slide2 from "../../assets/images/homeslider/hts2.webp"
import slide3 from "../../assets/images/homeslider/hts3.webp"

function HoleSloder() {
    return (
        <>
            {/* Home slider only work desktop when you want to open in tablat to use get for met  */}



            <div id="carouselExampleIndicators" className="carousel_home_slide carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* here is slider image  */}
                        <img src={slide1} className="d-block w-100" />
                        {/* here is slider text  */}
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        {/* here is slider image  */}
                        <img src={slide2} className="d-block w-100" />
                        {/* here is slider text  */}
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        {/* here is slider image  */}
                        <img src={slide3} className="d-block w-100" />
                        {/* here is slider text  */}
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>















            <style>
                {`
              
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

    
    `}
            </style>
        </>
    )
}
export default HoleSloder;