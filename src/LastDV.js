import React from 'react'
import bkmmss from'./images/logo-bookmark.svg'
import twitter from './images/twitter.svg'
import fb from './images/facebook-f (3).svg'

const lastDV = () => {
  return (
    <div>
         <div class="accordion" id="accordionExample">
  <div id='acc' class="accordion-item">
    <h2 class="accordion-header h1" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Simple bookmarking
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header h2" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Speedy Searching
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
      
    </div>
    </div>
    <div class="accordion-item">
    <h2 class="accordion-header h3" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Easy Sharing
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
    </div>
    
    
    <button className='more-info'>More info</button>
    <div className='last-dv'>
        <p>35,000+ already joined</p>
        <h3>stay up to date with what <br /> we are doing</h3>
       <div className='form'>
       <input type="text"/> <br/>
        <button className='last-btn'>contact us</button>
       </div>
        
    </div>
   <footer id='FTR'>
      
       <img className='Footer-BKM' width={160} src={bkmmss} alt="" />

       
       <p className='f'>FEATURES</p>
       <p className='p'>PRICING</p>
       <p className='c'>CONTACT</p>
       <div className='socials'>
        <img className='fb' width={25} src={fb} alt="" />
        <img width={25} src={twitter} alt="" />
       </div>
   </footer>
   
    </div>
  )
}

export default lastDV