import NavBar from "./components/NavBar";
import Cust_lgin from "./components/Cust_lgin";
import Qr_page from "./components/Qr_page";
import New_pass from "./components/New_pass";
import Payments from "./components/Payments";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
import Managelot from "./components/Managelot";
import U_slots from "./components/U_slots";
import Report_vio from "./components/Report_vio";
import U_rate from "./components/U_rate";
import View_vio from "./components/View_vio"
import { Routes, Route} from "react-router-dom";
import Img from "./components/Img";


import React, { Component } from 'react'
import Pay_success from "./components/Pay_success";
import Err from "./components/Err";
import About from "./components/About";
import PassState from "./context/passState";

export default class App extends Component {
  render() {
    return (
      <>
      <NavBar />
      <PassState>
      <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/clgin" element={<Cust_lgin />} />
          <Route exact path="/qr" element={<Qr_page />} />
          <Route exact path="/np" element={<New_pass />} />
          <Route exact path="/payments" element={<Payments />} />
          <Route exact path = "/ps" element = {<Pay_success/>} />
          <Route exact path="/adminlgin" element={<Admin day="30" month="2" year="1" />} />
          <Route exact path="/manage" element={<Managelot />} />
          <Route exact path="/uslots" element={<U_slots slots="30" />} />
          <Route exact path="/rvio" element={<Report_vio />} />
          <Route exact path="/urate" element={<U_rate />} />
          <Route exact path="/vvio" element={<View_vio />} />
          <Route exact path = "/img" element = {<Img/>} />
          <Route exact path="/err" element = {<Err/>} />
          <Route exact path = "/about" element = {<About/>} />

          
        </Routes>
        </PassState>
    </>
    )
  }
}


