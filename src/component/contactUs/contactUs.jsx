import "./support.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function contactUs() {


  return (
    <>
    <div class="contactUs">
      <h3>You may contact us using the information below:</h3>
      <p>Merchant Legal entity name: DIGIDIVINE ONLINE SERVICES PRIVATE LIMITED</p>
      <p>Registered Address: At-Garapur ,Po-Kapaleswar Kendrapara ODISHA 754211</p>
      <p>Operational Address: At-Garapur ,Po-Kapaleswar Kendrapara ODISHA 754211</p>
      <p> Telephone No: 9861581037</p><p>E-Mail ID: divinedigitalworld1@gmail.com</p>
    </div>
    <style>
      {
        `
        
        .contactUs {
          display: flex;
          flex-direction: column;
          width: 50%;
          margin: 0 auto;
          text-align: center;
          box-shadow: 10px 10px 5px lightblue;
      }
        `
      }
    </style>
    </>
  );
}
export default contactUs;
