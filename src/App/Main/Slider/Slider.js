import React from 'react'

import './slider.css'


const Slider = () =>{
    return(
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
    )
}

export default Slider