import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PassContext from '../context/passContext';
import { every } from 'timers';


const Pay_success = () => {

  const [seconds,setSeconds] = useState(parseInt(10,10));

  const context = useContext(PassContext);

  const {addpasses} = context;

  const navigate = useNavigate();

  const l = useLocation()

  const {loc,tpe,val} = l.state

  const handle = (location,type,validity)=>{
    addpasses(location,type,validity);
  }


  useEffect(()=>{
    handle(loc,tpe,val);
    const ctr = setInterval(()=>{
      setSeconds((prevSeconds)=>{
        const newSeconds = prevSeconds -1;
        if(newSeconds === 0){
          clearInterval(ctr);
          setTimeout(()=>{
            navigate("/clgin");
          },0)
        }

        return newSeconds;
      })
    },1000)
  },[])
  return (
    <div>
      <div className='box2' id="paysuc">
        <h2 className='text-center'style={{textAlign: "center",padding:"10px", fontFamily:"TimesNewRoman"}}>Payment Successful! Redirecting to <Link to = '/clgin' className='link'>home....</Link> in {seconds} seconds</h2>
      </div>
    </div>
  )
}

export default Pay_success

