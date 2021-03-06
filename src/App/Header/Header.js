import React from 'react'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Title from './Title/Title'




const Header = () =>{
    return(
      <header>
        <div className="header-block">
            <div className="header-menu">
                <Logo/>
                <nav className="nav">
                   <Menu/>
                </nav>
            </div>
                <Title/>
            
        </div>     
      </header>
    )
  }

  export default Header