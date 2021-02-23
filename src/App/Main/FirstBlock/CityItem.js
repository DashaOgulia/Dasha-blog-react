import React from 'react'
import './FirstBlock.css'


const CityItem = (props) =>{
    return(
        <div className="galery-place">
            <div className="img-place">
               <img src={props.img}/>
           </div>
                <h3>{props.city}</h3>
                <p>{props.region}</p>
  
               <div className="button-white">View offers</div>
         </div>

    )
}

CityItem.defaultProps={
    region:"no description ...",
    img:"/img/dolina.png"
}


export default CityItem