import React from 'react'
import Navbar from './Navbar'
import '../styles/part1.css'
import ImageCarousel from './ImageCarousel'

function Part1() {
  return (
    <div className='part1'>
      <Navbar/>
      <div className='sec'>
     
      <div className='sliderBox'>
     
      <ImageCarousel/>
        </div>
      </div>

    </div>
  )
}

export default Part1
