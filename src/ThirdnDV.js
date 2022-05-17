import React, { useState } from 'react'
import img3 from './images/illustration-features-tab-1.svg'
import chrome from './images/logo-chrome.svg'
import firefox from './images/logo-firefox.svg'
import opera from './images/logo-opera.svg'
import dots from './images/bg-dots.svg'
const ThirdnDV = () => {
    const [textchange, setTextchange] = useState("Organize your bookmarks however you like. <br /> Our simple drag-and-drop interface gives you complete control over how you manage <br /> your favorite sites.")
       const changeText = ()  => {
         if (textchange == 'Organize your bookmarks however you like. <br /> Our simple drag-and-drop interface gives you complete control over how you manage <br /> your favorite sites.') {
          setTextchange('fklhhhhhhhhhhhhhjljljkjjjjjjjj;;;;;;;;;;;;;;;jk;k;lhkjhjjhfhgfgfdghfgshshhgsgsggs')
         }
        else{
          setTextchange('Organize your bookmarks however you like. <br /> Our simple drag-and-drop interface gives you complete control over how you manage <br /> your favorite sites.')
        }

       }

  return (
      
    
    <div>
        <div>
          <div className='third-dv'>
          <img className='image3' width={400} src={img3} alt="" />
            <div className='thirdv-text'>
            <h2 className='thirdv-h'>Bookmark in one click</h2>
            <p className='thirdv-P'>
             {textchange}
            </p>
            <button onClick={changeText} className='MoreInfo'>More info</button>
            </div>
            
          </div>
           

            <h2 className='thirdv-hh'>Download the extension</h2>
            <p>we've got more browser extension in the pipeline. <br />
            please do let us know if youve got a <br/> favourite youd like us tp prioritize.</p>
                 <br /><br />
                 <div className='browsers'>
                 <div className='chrom'><img className='chromeImg' width={150} src={chrome} alt=""/>
             <h3>Add to Chrome</h3>
             <p className='M-version'>Minimum version 62</p>
             <img className='dots' src={dots} alt="" />
             <button className='Chrome-btn'>Add & install extension</button>
            </div> 

             <div className='chrm2'><img className='Fire-foxImg' width={150} src={firefox} alt="" />
             <h3>Add to firefox</h3>
             <p className='M-version'>Minimum version 55</p>
             <img className='dots' src={dots} alt="" />
             <button className='Chrome-btn'>Add & install extension</button>                                                                              
             </div>

             <div className='chrm3'><img className='opera-Img' width={100} src={opera} alt="" />
             <h3>Add to Opera</h3>
             <p className='M-version'>Minimum version 46</p>
             <img className='dots' src={dots} alt="" />
             <button className='Chrome-btn'>Add & install extension</button>  
             </div>
                 </div>
            
             <div className='FAQS'>
               <h3>Frequently asked <br /> questions</h3>
               <p>Here some of our FAQS. if you have any <br /> other questions you'd like answered please <br /> feel free to email us</p> </div>
             
        </div>
        
    </div>
  )
}

export default ThirdnDV