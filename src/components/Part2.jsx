import React from 'react'
import '../styles/part2.css'
import img3 from '../assets/img3.png'
import MiniSlider from './MiniSlider'


function Part2() {
  return (
    <div className='part2'>
     <h2 className='sub'>Explore Youre First Collectible</h2> 
     <div className='part2-sec1'>
     <h1 className='part2-h1'>Meta&nbsp;Lives</h1>
     <h2>Live in Astrix</h2>
     <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</p>

     </div>
     <div className='part2-sec2'>
        <img src={img3}/>
        <p>22k people interested</p>
     </div>
     <div className='part2-sec3'>
        <h3>Collectibles</h3>
        <MiniSlider/>
        <br/><br/>
     </div>
     <button className='part2-btn'>Join Waitlist</button>
    </div>
  )
}

export default Part2
