import React from 'react'

import './menu.css'
import search from './search.png'

const Menu=()=>{
    return(

        <div className="header-nav">
            <a href = "#" className="header-nav-link">Guide</a>
            <a href = "#" className="header-nav-link">Journey</a>
            <a href = "#" className="header-nav-link">Hotels</a>
            <a href = "#" className="header-nav-link">Travelers</a>
            <div className="search">
                <img src={search}/>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    </div>
    )
}

export default Menu