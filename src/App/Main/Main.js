import React from 'react'


const Main = () => {
    return (
      <main>
          <section className = "slider">
              <div className="title">Popular places to  discover</div>
              <div className="slider-block">
                  <div className="slider-img krakiv">
                      <div className="fixed-title">
                          <h3>Krakiv</h3>
                          <p>Best way</p>
                      </div>
                      <div className="view-hover">
                          <h2 className="header-title-slider">Krakiv
                          </h2>
                          <div className="header-subtitle-slider">Best way </div>
                          <div className="header-button">
                              <a href="#" className="button">View offers</a>
                          </div>
                      </div>
                      
                  </div>
                  <div className="slider-img zakopane">
                      <div className="fixed-title">
                          <h3>Zakopane</h3>
                          <p>Best way</p>
                      </div>
                      <div className="view-hover">
  
                          <h2 className="header-title-slider">Zakopane
                          </h2>
                          <div className="header-subtitle-slider">Best way </div>
                          <div className="header-button">
                              <a href="#" className="button">View offers</a>
                          </div>
  
                      </div>
  
                      
                  </div>
                  <div className="slider-img sandomierz">
                      <div className="fixed-title">
                          <h3>Sandomierz</h3>
                          <p>Best way</p>
                      </div>
  
                      <div className="view-hover">
                          <h2 className="header-title-slider">Sandomierz
                          </h2>
                          <div className="header-subtitle-slider">Swietokrzhyskie</div>
                          <div className="header-button">
                              <a href="#" className="button">View offers</a>
                          </div>
                      </div>
  
                      
                  </div>
                  <div className="slider-img sopot">
                      <div className="fixed-title">
                          <h3>Sopot</h3>
                          <p>Best way</p>
                      </div>
                      <div className="view-hover">
                          <h2 className="header-title-slider">Sopot
                          </h2>
                          <div className="header-subtitle-slider">Pomorskie</div>
                          <div className="header-button">
                              <a href="#" className="button">View offers</a>
                          </div>
                      </div>
                      
                  </div>
                  <div className="slider-img dark">
                      <div className="fixed-title">
                          <h3>Lodz</h3>
                          <p>Best way</p>
                      </div>
                      
  
  
                      <div className="view-hover">
                          <h2 className="header-title-slider">Lodz
                          </h2>
                          <div className="header-subtitle-slider">Best way</div>
                          <div className="header-button">
                              <a href="#" className="button">View offers</a>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </section>
          <section>
              <div className="container first-block">
                  <form className = "search-block">
                      <h3>Where you want to go?</h3>
                      <div className = "search">
                          <input type="text" placeholder="Search place" name="search"/>
                          <button type="submit" className = "submit"> 
                              <img src="./img/search.png"/>
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
                              <img src="./img/poznan.png"/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src="./img/warshawa.png"/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src="./img/wroclaw.png"/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src="./img/karpach.png"/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src="./img/dolina.png"/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>
                      <div className="galery-place">
                          <div className="img-place">
                              <img src="./img/kozy.png"/>
  
                          </div>
                          <h3>Poznan</h3>
                          <p>Wielkopolskie</p>
  
                          <div className="button-white">View offers</div>
                      </div>      
                  </div>
              </div>  
          </section>
  
          <section>
              <div className="container second-block">
                  <div className="containerbackground">
                      <h1>san</h1>
                      <h1>dom</h1>
                      <h1>ierz</h1>
                  </div>
                  <div className="second-block-content">
                    
                      <h3 className = "title-city">Explore city</h3>
  
                      
                          <div className="info-block">
                              <h2>Sandomierz</h2>
                              <p>Sandomierz is one of the oldest and historically most significant cities in Poland. Archeological finds around the city indicate that humans have inhabited the area since neolithic times. The city came into existence in the early Middle Ages, taking advantage of an excellent location at the junction of Vistula and San rivers, and on the path of important trade routes. 
                              </p>
                              <p>The first known historical mention of the city comes from the early 12th-century, when the chronicler Gallus Anonymus ranked it together with Kraków and Wrocław as one of the main cities of Poland. The testament (ca 1115-1118) of Bolesław III Wrymouth, in which he divided Poland among his sons, designated Sandomierz as the capital of one of the resulting principalities, the Duchy of Sandomierz.</p>
                              <button className="button">Check offers</button>
                          </div>
                          <div className="picture-block">
                              <img src ="./img/sandomiercz.png"/>
                              <div className="orange-border"></div>
                          </div>
                      
                  </div>
              </div>
              
          </section>
  
          <section className="cover">
              <div className="container third-block">
                  <div className="third-block-content">
                      <div className="header-text">
                          <h1 className="header-title">Enjoy your journey
                          </h1>
                          <div className="header-button">
                              <a href="#" className="button">Sing up</a>
                          </div>
                          <div className="header-subtitle">You can also sign up on our <a href="#">newsletter</a></div>
                          
                      </div>
                  </div>
              </div>
          </section>
          
      </main>
    )
  }

  export default Main