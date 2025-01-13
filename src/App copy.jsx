
import { BrowserRouter as Router,Routes, Route, Link, } from "react-router-dom";
// import logo from './logo.svg';
import Footer from "./component/nabar/footer/footer.jsx"
// import { Route, Routes } from "react-router-dom";
import Body from "./component/body/body.jsx"
import Header from "./component/nabar/header/header.jsx"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import PhoneV from "./component/phoneVerification/PhoneV.jsx";
import Add_product from "./component/admin_panel/addproduct.jsx";
import Show_hide from "./AppShowAndHide.jsx"
// import Login_1st from "./component/Login/loginf_first.jsx";

// roting 
// import HomeSlider from "./component/homePage/Index"
import WirelessSpeakers from "./component/product/WirelessSpeakers"
import RockerzHeadphones from "./component/product/RockerzHeadphones"
import Smartwatches from "./component/product/Smartwatches"
import WirelessEarbuds from "./component/product/WirelessEarbuds"
import WirelessEarphones from "./component/product/WirelessEarphones"
import Apple from "./component/product/brandList/apple"
import Boat from "./component/product/brandList/boat"
// import Login_1st from "./component/Login/loginf_first.jsx";

// import Login_1st from "./component/Login/loginf_first.jsx";
import HomeSlider from "../src/component/homePage/Index"
// import ProductPage from "../src/component/product/product"

// import Phonevt from "./component/phoneVerification/PhoneV.jsx"
import Profile from "./component/profile/viewProfile.jsx"
import { useState } from "react";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
        <Routes>
  
            
            <Route exact path="/" element={<HomeSlider />} />
            <Route exact path="/wireless-speakers" element={<WirelessSpeakers />} />
            <Route exact path="/rockerz-headphones" element={<RockerzHeadphones />} />
            <Route exact path="/smart-watches" element={<Smartwatches />} />
            <Route exact path="/wireless-earbuds" element={<WirelessEarbuds />} />
            <Route exact path="/wireless-earphones" element={<WirelessEarphones />} />
            <Route exact path="/apple" element={<Apple />} />
            <Route exact path="/boat" element={<Boat />} />
            {/* <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} /> */}
            {/* <HomeSlider /> */}
            {/* <Show_hide></Show_hide> */}
            {/* <Phonevt /> */}
            {/* </Routes> */}
           
    
        </Routes>
 <Footer />












      {/* <div className="App"> */}

      {/* <Routes> */}
      {/* <Nav /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <PhoneV /> */}
      {/* <Route path="/" element={<Body/>}></Route>
      <Route path="/add_product" element={<Add_product/>}></Route> */}
      {/*  */}
      {/* */}
      {/* <Login_1st></Login_1st> */}
      {/* <Show_hide></Show_hide> */}

      {/* This is a profile  */}

      {/* <Profile /> */}

      {/* 
      <PhoneV /> */}
      {/* <PhoneV /> */}
      {/* <Add_product/> */}



      {/* this is a home page body import data  */}
      {/* <Body /> */}





      {/* </div> */}
    </>
  )
}

export default App
