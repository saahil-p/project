import React from 'react'
import { Link } from 'react-router-dom'
const Cards = (props) => {
    return(
        <div className='col-md-3 mx-2 my-2'>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <p className="card-title">Location: {props.location}</p>
                    <p className="card-text">Validity: {props.validity}</p>
                    <p className='card-text'>Type : {props.type}</p>
                    {/* <Link to = "/qr" state={{id: props.id}}>Validate</Link> */}
                        <button style={{backgroundColor: "orange",borderRadius: "12px",marginLeft:"5rem"}}><Link to = "/qr" state = {{id: props.id}}>Validate</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Cards
