import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const App = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick = {()=>setExtended(prev=>!prev)}   className='menu' src={assets.menu_icon} alt='' />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt='' />
                    {extended ? <p>New chat</p> : null}
                </div>
            </div>

            {extended
                ?
                <div className="recent">
                    <p className="recnt-title">Recent</p>
                    <div>
                        <img src={assets.message_icon} alt=''/>
                      0  <p>what is react...</p>
                    </div>
                </div>
                : null
            }

            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon}></img>
                    {extended? <p>Help</p>:null}
                </div>

                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon}></img>
                    {extended?<p>Activity</p>:null}
                </div>

                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon}></img>
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    );
};

export default App
