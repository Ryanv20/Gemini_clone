import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'




const Main = () => {
    return (
        <div className='main'>
          <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""/>
          </div>
                <div className='main-container'>
                  <div className='greet'>
                      <p><span>Hello, Roki</span></p>
                      <p>How can i help you today?</p>
                  </div>
                  <div className="cards">
                    <div className="card">
                      <p>Find out who's better between Roki and Offy</p>
                      <img src={assets.compass_icon} alt='' />
                    </div>
                   
                    <div className="card">
                      <p>Why do i get goosebumps when i'm close to her</p>
                      <img src={assets.bulb_icon} alt='' />
                    </div>
                    
                    <div className="card">
                      <p>Are the rings in lord of the rings safe?</p>
                      <img src={assets.message_icon} alt='' />
                    </div>
                    
                    <div className="card">
                      <p>why aren't they like us?</p>
                      <img src={assets.code_icon} alt='' />
                    </div>
                  </div>
                  <div className="main-bottom">
                    <div className="search-box">
                      <input type="text" placeholder='Enter a prompt here'/>
                      <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                      </div>
                    </div>
                   <p className="bottom-info">
                    Dante was nothing more than an artist in love
                   </p>
                  </div>
                </div>
        </div>
    )
}
export default Main