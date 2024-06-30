import React from 'react'
import "./Profile.scss";
import List from '../../Components/List/List';
import Chat from '../../Components/Chat/Chat';

const Profile = () => {
  return (
   <div className='profilePage'>
    {/* Product categry */}
    <div className="details">
     <div className="wrapper">
        {/* profile info */}
      <div className="title">
        <h2>User Information</h2>
        <button>Update Profile</button>
      </div>
      <div className="info">
        <span>
            Avatar:
            <img 
            src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" 
            />
        </span>
        <span>Username: <b>John Deo</b></span>
        <span>E-mail: <b>Johndeo@xyz</b></span>
      </div>
      {/* my list */}
      <div className="title">
            <h2>My List</h2>
            <button>Add New Post</button>
          </div>
      <div className="myList">
        <List/>
      </div>
        
     
      {/* save list */}
      <div className="title">
      <h2>Saved List</h2>
           </div>
      <div className="myList">
        <List/>
      </div>
     </div>
    </div>

    {/* Chat */}
    <div className="chatContainer">
     <div className="wrapper">
      <Chat/>
     </div>
    </div>
   </div>
  )
}

export default Profile
