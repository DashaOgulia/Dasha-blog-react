import React from 'react'
import ReactDOM from 'react-dom'

import "./reset.css"
import"./style.css"


const App = () => {
    return(
      <>
          <header>
              <div class="header-block">
                  <div class="header-menu">
                      <div class="header-logo">
                          <a href = "#">
                              <img src="./img/logo.png"/>
                              <span>Polind</span>
                          </a>
                      </div>
                      <nav class="nav">
                          <div class="header-nav">
                              <a href = "#" class="header-nav-link">Guide</a>
                              <a href = "#" class="header-nav-link">Journey</a>
                              <a href = "#" class="header-nav-link">Hotels</a>
                              <a href = "#" class="header-nav-link">Travelers</a>
                              <div class="search">
                                  <img src="./img/search.png"/>
                              </div>
                          </div>
                      </nav>
                  </div>
                
                  <div class="header-text">
                      <h1 class="header-title">Fall in love
                      </h1>
                      <h1 class="header-title-red">with Poland</h1>
                      <div class="header-subtitle">Best way to find your perfect place in Poland</div>
                      <div class="header-button">
                          <a href="#" class="button">Search your place</a>
                      </div>
                  </div>
              </div>     
          </header>
          <main>
              <section class = "slider">
                  <div class="title">Popular places to  discover</div>
                  <div class="slider-block">
                      <div class="slider-img krakiv">
                          <div class="fixed-title">
                              <h3>Krakiv</h3>
                              <p>Best way</p>
                          </div>
                          <div class="view-hover">
                              <h2 class="header-title-slider">Krakiv
                              </h2>
                              <div class="header-subtitle-slider">Best way </div>
                              <div class="header-button">
                                  <a href="#" class="button">View offers</a>
                              </div>
                          </div>
                          
                      </div>
                      <div class="slider-img zakopane">
                          <div class="fixed-title">
                              <h3>Zakopane</h3>
                              <p>Best way</p>
                          </div>
                          <div class="view-hover">

                              <h2 class="header-title-slider">Zakopane
                              </h2>
                              <div class="header-subtitle-slider">Best way </div>
                              <div class="header-button">
                                  <a href="#" class="button">View offers</a>
                              </div>

                          </div>

                          
                      </div>
                      <div class="slider-img sandomierz">
                          <div class="fixed-title">
                              <h3>Sandomierz</h3>
                              <p>Best way</p>
                          </div>

                          <div class="view-hover">
                              <h2 class="header-title-slider">Sandomierz
                              </h2>
                              <div class="header-subtitle-slider">Swietokrzhyskie</div>
                              <div class="header-button">
                                  <a href="#" class="button">View offers</a>
                              </div>
                          </div>

                          
                      </div>
                      <div class="slider-img sopot">
                          <div class="fixed-title">
                              <h3>Sopot</h3>
                              <p>Best way</p>
                          </div>
                          <div class="view-hover">
                              <h2 class="header-title-slider">Sopot
                              </h2>
                              <div class="header-subtitle-slider">Pomorskie</div>
                              <div class="header-button">
                                  <a href="#" class="button">View offers</a>
                              </div>
                          </div>
                          
                      </div>
                      <div class="slider-img dark">
                          <div class="fixed-title">
                              <h3>Lodz</h3>
                              <p>Best way</p>
                          </div>
                          


                          <div class="view-hover">
                              <h2 class="header-title-slider">Lodz
                              </h2>
                              <div class="header-subtitle-slider">Best way</div>
                              <div class="header-button">
                                  <a href="#" class="button">View offers</a>
                              </div>
                          </div>
                          
                      </div>
                  </div>
              </section>
              <section>
                  <div class="container first-block">
                      <form class = "search-block">
                          <h3>Where you want to go?</h3>
                          <div class = "search">
                              <input type="text" placeholder="Search place" name="search"/>
                              <button type="submit" class = "submit"> 
                                  <img src="./img/search.png"/>
                              </button>
                          </div>
                          
                      </form>  
                      <div class="filter-block">
                          <div class="filter-buttons">
                              <div class="filter-btn-grey">Journey</div>
                              <div class="filter-btn-grey">Travelers</div>
                              <div class="filter-btn-grey">Guide</div>

                          </div>
                          <div class="filter-buttons">
                              <div class="filter-btn-white"> Mazury</div>
                              <div class="filter-btn-white"> Cracow</div>
                              <div class="filter-btn-white"> Zakopane</div>
                          </div>
                      </div>

                      <div class="galery-block">
                          <div class="galery-place">
                              <div class="img-place">
                                  <img src="./img/poznan.png"/>
          
                              </div>
                              <h3>Poznan</h3>
                              <p>Wielkopolskie</p>
          
                              <div class="button-white">View offers</div>
                          </div>
                          <div class="galery-place">
                              <div class="img-place">
                                  <img src="./img/warshawa.png"/>
          
                              </div>
                              <h3>Poznan</h3>
                              <p>Wielkopolskie</p>
          
                              <div class="button-white">View offers</div>
                          </div>
                          <div class="galery-place">
                              <div class="img-place">
                                  <img src="./img/wroclaw.png"/>
          
                              </div>
                              <h3>Poznan</h3>
                              <p>Wielkopolskie</p>
          
                              <div class="button-white">View offers</div>
                          </div>
                          <div class="galery-place">
                              <div class="img-place">
                                  <img src="./img/karpach.png"/>
          
                              </div>
                              <h3>Poznan</h3>
                              <p>Wielkopolskie</p>
          
                              <div class="button-white">View offers</div>
                          </div>
                          <div class="galery-place">
                              <div class="img-place">
                                  <img src="./img/dolina.png"/>
          
                              </div>
                              <h3>Poznan</h3>
                              <p>Wielkopolskie</p>
          
                              <div class="button-white">View offers</div>
                          </div>
                          <div class="galery-place">
                              <div class="img-place">
                                  <img src="./img/kozy.png"/>
          
                              </div>
                              <h3>Poznan</h3>
                              <p>Wielkopolskie</p>
          
                              <div class="button-white">View offers</div>
                          </div>      
                      </div>
                  </div>  
              </section>

              <section>
                  <div class="container second-block">
                      <div class="containerbackground">
                          <h1>san</h1>
                          <h1>dom</h1>
                          <h1>ierz</h1>
                      </div>
                      <div class="second-block-content">
                        
                          <h3 class = "title-city">Explore city</h3>
          
                          
                              <div class="info-block">
                                  <h2>Sandomierz</h2>
                                  <p>Sandomierz is one of the oldest and historically most significant cities in Poland. Archeological finds around the city indicate that humans have inhabited the area since neolithic times. The city came into existence in the early Middle Ages, taking advantage of an excellent location at the junction of Vistula and San rivers, and on the path of important trade routes. 
                                  </p>
                                  <p>The first known historical mention of the city comes from the early 12th-century, when the chronicler Gallus Anonymus ranked it together with Kraków and Wrocław as one of the main cities of Poland. The testament (ca 1115-1118) of Bolesław III Wrymouth, in which he divided Poland among his sons, designated Sandomierz as the capital of one of the resulting principalities, the Duchy of Sandomierz.</p>
                                  <button class="button">Check offers</button>
                              </div>
                              <div class="picture-block">
                                  <img src ="./img/sandomiercz.png"/>
                                  <div class="orange-border"></div>
                              </div>
                              
              
                          
              
                          
                      </div>
                  </div>
                  
              </section>

              <section class="cover">
                  <div class="container third-block">
                      <div class="third-block-content">
                          <div class="header-text">
                              <h1 class="header-title">Enjoy your journey
                              </h1>
                              <div class="header-button">
                                  <a href="#" class="button">Sing up</a>
                              </div>
                              <div class="header-subtitle">You can also sign up on our <a href="#">newsletter</a></div>
                              
                          </div>
                      </div>
                  </div>
              </section>
              
          </main>
          <footer>
              <div class="container polind-block">
                  <div class=" containerbackground polind">
                      <h1>Polind</h1> 
                  </div>
                  <div class="logo">
                      <img src="./img/logo.png"/>
                      <div>All rights reserved by symo.co</div>
                  </div>            
                  
              </div>
          </footer>
      </>
    )

}

ReactDOM.render(<App/>,document.getElementById("root"))