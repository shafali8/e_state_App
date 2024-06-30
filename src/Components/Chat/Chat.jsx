import React, { useState } from 'react'
import "./chat.scss";


const Chat = () => {

    const [chat, setChat] = useState(false)
  return (
    <div className='chat'>
          <h2>Messages</h2>
        <div className="messages">
          
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
      </div>
      <div className="message" onClick={()=>setChat(true)}>
        <img 
        src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt=""
         />
         <span>John Deo</span>
         <p>Lorem ipsum dolor sit....</p>
       </div>
      </div>
      {chat && (   <div className="chatBox">
        <div className="top">
         <div className="user">
            <img src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            John Deo
           
         </div>
         <span 
         className='close' 
         onClick={()=>setChat(null)}
         >X</span>
        </div>

        <div className="center">
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor sit amet.</p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
      </div>)}
   
    </div>
  )
}

export default Chat
