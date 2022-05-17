import React from 'react'
import img1 from './images/illustration-hero (3).svg'

const FirstDv = () => {
  return (
    <div>
        <div className='first-DV'>
       <div>
       <img className='firstImage' width={430} src={img1} alt="" />
       <div className='chrome-firefox'>
            <button className='chm me-3'> <a className='chr-a' href="">Get it on chrome</a></button>
            <button className='ff'> <a className='ff-a' href="">Get it on firefox</a></button>
        </div>
         </div> 
        <div className='first-DV-text'> 
        <h1 className='firstHeader'>A simple Bookmark <br /> Manager</h1>
        <p className='p1'>
            A clean and simple interface to organize <br/> your favorite websites. Open a new <br/> browser tab and see your site load <br/> instantly. Try it for free.
        </p>
      
        </div>
       
        </div>
     

    </div>
  )
}

export default FirstDv