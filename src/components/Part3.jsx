import React from 'react'
import '../styles/part3.css'
import QR from '../assets/QR.png'
import venue from '../assets/venue.png'
import Clock from '../assets/Clock.png'
import Artist from './Artist'


function Part3() {
  return (
    <div className='part3'>
     <h2 className='sub'>Explore Youre First Event</h2> 
     <div className='part3-sec1'>
     <h1 className='part3-h1'>Event Name</h1>
     <h2><img src={venue}/> &nbsp;&nbsp;&nbsp;&nbsp;<img src={Clock}/> 04/3/2024  @19:00</h2>
     <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</p>

     </div>
     <div className='part3-sec2'>
       
        <h2>Artist lineup</h2>
     </div>
     <div className='part3-sec3'>
        <h3>Collectibles</h3>
        <Artist/>
     </div>
     <div className='part3-sec4'>
     <img src={QR}/>
     <button className='part3-btn'>Join Waitlist</button>
     </div>
    </div>
  )
}

export default Part3
