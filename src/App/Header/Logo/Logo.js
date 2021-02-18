import React from 'react'
import './logo.css'
import logo from './logo.png'

const Logo = () =>{
    return (
        <div className="header-logo">
                    <a href = "#">
                        <img src={logo}/>
                        <span>Polind</span>
                    </a>
                </div>
    )
}

export default Logo



