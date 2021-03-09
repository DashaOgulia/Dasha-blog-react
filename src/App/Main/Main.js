import React from 'react'
import { Route } from 'react-router'
import Slider from './Slider/Slider'
import FirstBlock from './FirstBlock/FirstBlock'
import SecondBlock from './SecondBlock/SecondBlock'
import Cover from './Cover/Cover'
import GuidePage from "./GuidePage/GuidePage"
import JurneyPage from "./JurneyPage/JurneyPage"
import HotelsPage from "./HotelPage/HotelPage"
import TravelersPage from "./TravelersPage/TravelersPage"


const Main = () => {
    return (
      <main>
          <Slider/>
         
          <section>
              <FirstBlock/> 
          </section>
  
          <section>
              <SecondBlock/>
              
          </section>
  
          <Cover/>
          
          <Route path="/guide" component={GuidePage}/>
          <Route path="/jurney" component={JurneyPage}/>
          <Route path="/hotels" component={HotelsPage}/>
          <Route path="/travelers" component={TravelersPage}/>
          
      </main>
    )
  }

  export default Main