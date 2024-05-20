import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Part2 from './Part2'
import Part1 from './Part1'
import VerticalBar from './VerticalBar'
import '../styles/CollectionComponent.css'

function CollectionComponent() {
  return (
 
       <div className="container"> 
  
  <Part1/>
  <VerticalBar/>
  <Part2/>
  </div>
   
  )
}

export default CollectionComponent
