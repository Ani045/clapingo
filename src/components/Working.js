import React from 'react'
import "./Working.css";
function Working() {
  return (
    <div>
      <div className='work'>
        How it works ?
      </div>
      <div className='account'>
        <div className='create'>1. Create Account</div>
        <div className='num' style={{fontSize:"18px"}}>Create your account using phone number or email and take a free trial at ₹1.</div>
      </div> 
      <div className='imag'>
        <img src='images\Subscribe & plans 1.png'></img></div>
        <div className='blur'>
      </div>
      <div className='slot'>
        <div className='select'>3. Select time slot</div>
        <div className='time' style={{fontSize:"18px"}}>Subscribe & select any time slot between 10 AM to 12 midnight.</div>
      </div>
       <div className='subscribe'>
        <div className='sub'>2.Subscribe</div>
        <div className='package' style={{fontSize:"18px"}}>Choose your preferred duration and select subscription package for your sessions. </div>
      </div>
       <div className='done'>
        <div className='created'>4. You are done</div>
        <div className='profile' style={{fontSize:"18px"}}>That’s it! Start practicing and reach your learning goal in speaking.</div>
      </div> 
    </div>
  )
}

export default Working
