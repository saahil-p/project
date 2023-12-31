// import React, { Component } from 'react';
// import Passes from './Passes';
// import "./passes_style.css";
// import { Link } from 'react-router-dom';

// export default class Cust_lgin extends Component {
//   render() {
//     return (
//         <>
//         <div className='box'>
//           <h1 style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}><u>Active Passes</u></h1>
//             <div className = "row">
//               <div className='col' id ='tl'>
//                 <Passes btntxt = "Validate" location = "PESU" validity = "Day" type = "2 Wheeler" position = "top-left"/>
//               </div>
//               <div className = "col" id ='tr'>
//                 <Passes btntxt = "Validate" location = "Mall_1" validity = "Week" type = "4 Wheeler" position = "top-right"/>
//               </div>
//             </div>
//             <div className='row' id ='bl'>
//               <div className = "col">
//               <Passes btntxt = "Validate" location = "Lot_32" validity = "Month" type = "2 Wheeler" position = "bottom-left"/>
//               </div>
//               <div className='col' id ='br'>
//                 <Passes btntxt = "Validate" location = "Office" validity = "Year" type = "4 Wheeler" position = "bottom-right"/>
//               </div>
//             </div>
//             <button id='npassbtn'><Link to = '/np'>New Pass</Link></button>
//         </div>
//         </>
//     )
//   }
// }


import React, { useContext, useEffect } from 'react'
import Cards from './Card';
import PassContext from '../context/passContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Cust_lgin = () => {

  const context = useContext(PassContext);
  const {fetchpasses,pass} = context

  const navigate= useNavigate();

  useEffect(() => {
    if(localStorage.getItem("token")){
      fetchpasses();
    }
    else{
      navigate("/")
    }
  },[])
  return (
    <>
    <div className=''>
    <div className= "row my-3">
      <h1 className='text-center'>Your passes</h1>
      {pass.length === 0 && <div className = 'box'>No passes to display</div>}
    {pass.map((p)=>{
      return <Cards key = {p._id} location = {p.location} validity = {p.validity} type = {p.p_type} id = {p._id}/>
    })}
    </div>
    </div>
    </>
    )
}

export default Cust_lgin
