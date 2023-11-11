import React, { useState } from "react";

import PassContext from "./passContext";


const  PassState = (props)=>{
    const [pass,setPass] = useState([]);

    const fetchpasses = async () => {
        const response = await fetch("http://localhost:4100/api/passes/fetchallpasses", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
          }
        })
        const json = await response.json()
        setPass(json)
      }

      const addpasses = async (location,p_type,validity)=>{
        const response = await fetch("http://localhost:4100/api/passes/addpass",{
          method:"POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem("token")
          },
          body : JSON.stringify({location,p_type,validity})
        });
        const p = await response.json()
        console.log(p)

        setPass(pass.concat(p))
      }

      return(
        <PassContext.Provider value = {{fetchpasses,pass,addpasses}}>
            {props.children}
        </PassContext.Provider>
      )
    }


export default PassState;
