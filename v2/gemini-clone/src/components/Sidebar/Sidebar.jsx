import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <p>iiiiiiik</p>
              <div className='top'>
            <img className='menu' src={assets.menu_icon} alt=''/>
            <div className="new-chat">
                <img src={assets.plus_icon} alt=''/>          
                <p>New chat</p>
                  </div>
        </div>
        <div className="recent">
            <p className="recnt-title">Recent</p>

        <div>
            <img src={assets.message_icon} alt=''/>
            <p>what is react...</p>
        </div>

        </div>
        
        <div className='bottom'>
        <div className='bottom-item recent-entry'>
            <img src={assets.question_icon}></img>
            <p>Help</p>
        </div>    
        
        <div className='bottom-item recent-entry'>
            <img src={assets.history_icon}></img>
            <p>Activity</p>
        </div>    
        
        <div className='bottom-item recent-entry'>
            <img src={assets.setting_icon}></img>
            <p>Settings</p>
        </div>    
        </div>
    </div>
  );
};

export default Sidebar
