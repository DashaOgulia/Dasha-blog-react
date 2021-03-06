import React from 'react'
import Slider from './Slider/Slider'
import FirstBlock from './FirstBlock/FirstBlock'
import SecondBlock from './SecondBlock/SecondBlock'
import Cover from './Cover/Cover'


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
          
      </main>
    )
  }

  export default Main