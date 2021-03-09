import React from 'react'

import './menu.css'
import search from './search.png'
import { Link } from 'react-router-dom'

const Menu=()=>{
    return(

        <div className="header-nav">
            <Link className="header-nav-link" to="/guide">Guide</Link>
            <Link className="header-nav-link" to="/jurney"> Journey </Link>
            <Link className="header-nav-link"  to="/hotels">Hotels</Link>
            <Link className="header-nav-link"  to="/travelers">Travelers</Link>
            <div className="search">
                <img src={search}/>
            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    </div>
    )
}

export default Menu