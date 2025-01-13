import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import reportWebVitals from './report and test/reportWebVitals';
import {store} from "./app/store"
import { BrowserRouter,HashRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
  </HashRouter>
)
