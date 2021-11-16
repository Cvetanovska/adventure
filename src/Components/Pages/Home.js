import React from 'react';
import './Home.css';
import Slide from './Slide';
import Cards from './Cards';
import Product from './Product';

function Home() {
  return (
    < div className="home">
     <Slide />,
     <h1 className ="h1-home">IN LOVE WITH </h1>
     <p className="text">We are a couple of nomads who used to explore the globe.
        The day we stepped our foot on Balinese ground one thing was clear - we fell in love.
         We kept coming back every few months and understood that this is a love affair for a lifetime. 
         We fully moved here in 2018 and been exploring the island ever since. 
    </p>
     <Cards />
     
   </div>
  
  )
}
 


export default Home
