import logo from "../../../assets/images/logo.svg"
import Brandlogo from "../../../assets/Logo/EgmiBrandLogo2.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="shadow">
            <div className="d-flex flex-column mx-auto py-5 w-100" >
                <div className="footer_top">
                <Link to="/"><img alt="logo" src={Brandlogo} width="30px" /></Link>
                    {/* <p className="Subscribe">Subscribe to our email alerts!</p>
                    <form className="d-flex ft_search_header">
                        <input className="form-control me-2" type="search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit"><i className="fa fa-search"></i></button>
                    </form> */}

                    <p className="my-3" >
                        We are creating High Quality Resources and tools to Aid developers during the developement
                            of our projects</p>
                </div>
                <div className=" footer_section">
                    <ul >
                        <li >
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li >
                            <Link to='/terms-and-conditions'>Terms &amp; Conditions</Link>
                        </li>
                    </ul>
                    <div className="row footer-bottom-row copyright_footer">
                        <div className="col-lg-12 text-center footer__copyright text--xsmall text--subdued">
                            <p className="copy text-black w-100">
                                © 2024 gross clock Marketing Limited. All Rights Reserved.
                                For queries contact us: Manager, gross clock Marketing Limited Unit no. 29 &amp; 27, 3rd floor, ocac-7 &amp; f-sin, ocac shell, Link Road, India</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer;