import React from 'react'
import"./Footer.css"
function Footer() {
  return (
    <footer className='fot'>
      <div className='col1'>
        <img height="42px" width="143px"src='\images\clap.png'></img>
        <div className='des100'>
        Clapingo is  a unique platform where you practise conversations live with various speakers across the country. This is a judgment-free space where people can freely speak with a diverse set of people from different backgrounds.
        </div>
        <div className='social'>
          <div className='insta'>
            <img src='\images\Instagram.png'></img>
          </div>
          <div className='dribbble'>
            <img src='\images\dribbble.png'></img>
          </div>
          <div className='twitter'>
            <img src='\images\twitter.png'></img>
          </div>
          <div className='path'>
            <img src='\images\youtube.png'></img>
          </div>
          <div className='fb'>
            <img src='\images\FACE.png'></img>
          </div>
        </div>
      </div>
      <div className='right'>
      © 2021 Clapingo Education All rights reserved
      </div>
      <div className='col4'>
        <div className='reach'>
          Reach us
        </div>
        <div className='list12'>
          <div className='email'>
            <img src='\images\Message.png'></img>
            <div className='email1'>hello@clapingo.com</div>
          </div>
          <div className='mobile'>
            <img src='\images\phone-icon.png'></img>
            <div className='mobile1'>+91 6366937113</div>
          </div><div className='address'>
            <img src='\images\Location.png'></img>
            <div className='address1'>772 Lyonwood Ave
Walnut, CA 91789</div>
          </div>
        </div>
      </div>
      <div className='col3'>
        <div className='link'>
          Quick Links
        </div>
        <div className='listitem'>
          <div className='blog1'>Blogs</div>
          <div className='blog2'>Plans and Pricing</div>
          <div className='blog3'>Signin/login</div>
          <div className='blog4'>Teach with us</div>
        </div>
      </div>
      <div className='col5'>
        <div className='install11'>Install App</div>
        <div className='badges999'>
           <  div className='badge123'><img src='\images\Google Play Badge.png'></img></div>
         <  div className='badge1234'> <img top="64px"src='\images\App Store Badge.png'></img></div>
        </div>
      </div>
      <div className='comingsoon1'>
        Coming Soon
      </div>
    </footer>
  )
}

export default Footer
