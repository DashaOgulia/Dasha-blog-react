import React from 'react'
import './FirstBlock.css'
import search from './img/search.png'
import poznan from './img/poznan.png'
import warshawa from './img/warshawa.png'
import karpach from './img/karpach.png'
import dolina from './img/dolina.png'
import wroclaw from './img/wroclaw.png'
import kozy from './img/kozy.png'



const FirstBlock = () =>{
    return(
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
                      <div className="galery-place">
                          <div className="img-place">
                              <img src={poznan}/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src={warshawa}/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src={wroclaw}/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src={karpach}/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src={dolina}/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src={kozy}/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>      
                  </div>
              </div> 
    )
}

export default FirstBlock
