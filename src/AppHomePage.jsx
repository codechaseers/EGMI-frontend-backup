// import logo from './logo.svg';
import Footer from "./component/nabar/footer/footer"
import Body from "./component/body/body"
import Header from "./component/nabar/header/header"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Phonevt from "./component/phoneVerification/PhoneV"

function App() {
  return (
    <div className="App">
      <Header />
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
      <Body />
      <Phonevt />
      <Footer />
    </div>
  );
}

export default App;
