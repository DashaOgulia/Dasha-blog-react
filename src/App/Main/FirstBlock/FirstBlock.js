import React from 'react'
import './FirstBlock.css'
import search from './img/search.png'

import CityItem from './CityItem'
import cities from './cities'



const FirstBlock = () =>{
    return(
        <>
        <div className="container first-block">
                  <form className = "search-block">
                      <h3>Where you want to go?</h3>
                      <div className = "search">
                          <input type="text" placeholder="Search place" name="search"/>
                          <button type="submit" className = "submit"> 
                              <img src={search}/>
                          </button>
                      </div>
                      
                  </form>  
                  <div className="filter-block">
                      <div className="filter-buttons">
                          <div className="filter-btn-grey">Journey</div>
                          <div className="filter-btn-grey">Travelers</div>
                          <div className="filter-btn-grey">Guide</div>
  
                      </div>
                      <div className="filter-buttons">
                          <div className="filter-btn-white"> Mazury</div>
                          <div className="filter-btn-white"> Cracow</div>
                          <div className="filter-btn-white"> Zakopane</div>
                      </div>
                  </div>
  

                  <div className="galery-block">
                      {
                          cities.map((city)=>(
                            <CityItem
                                key={city.id}
                                img = {city.img}
                                city={city.city}
                                region = {city.region}
                            /> 
                          ))
                      }
                       
                  </div>
              </div> 
              </>
    )
}




export default FirstBlock
