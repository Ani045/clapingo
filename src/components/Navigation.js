import React from 'react'
import "./Navigation.css"
function Navigation() {
  return (
    <nav className='navigation'>
    <div className='logo'>
<img style={{height: "42px",width: "153px",left: "120px",top: "24px"}}src='\images\cplaingo logo.png' alt='logo'></img>
    </div>
    <div className='list'>
      < div className='l1'>Plan & Pricing</div>
      <div className='u1'> Teach with us </div>
    < div className='v1'> Affilate program</div>
     <div className='b4'>Kids</div>
     
        </div>
        < div className='login'>
            <img height="24px"width="24px"src='\images\frame.png'></img>
            <div className='log'>login</div>
        </div>
</nav>
  )
}

export default Navigation
