import React from 'react'
import logo from './logo.png'
import './polind.css'

const Polind = () => {
    return (
        <div className="container polind-block">
        <div className=" containerbackground polind">
            <h1>Polind</h1> 
        </div>
        <div className="logo">
            <img src={logo}/>
            <div>All rights reserved by symo.co</div>
        </div>            
        
    </div>
    )
}

export default Polind