import BGimg from "../../assets/images/bg.jpg"
import "./freor404.css"
import React from "react"
import { NavLink } from "react-router-dom"
const Fourzerofour = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound-bg"></div>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>we are sorry, but the page you requested was not found</h2>
                    <NavLink to={"/"} className="home-btn">
                    Go TO Home
                    </NavLink><NavLink to={"/support"} className="contact-btn">
                    Contact us
                    </NavLink>
                    {/* <a href="#" className="home-btn">Go Home</a> */}
                    {/* <a href="#" className="contact-btn">Contact us</a> */}
                    <div className="notfound-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Fourzerofour