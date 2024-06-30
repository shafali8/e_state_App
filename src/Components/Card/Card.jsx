import React from 'react'
import "./card.scss";
import { Link } from 'react-router-dom';
import pin from "../../assets/E-state_asserts/pin.png"
import bed from "../../assets/E-state_asserts/bed.png"
import bath from "../../assets/E-state_asserts/bath.png"
import save from "../../assets/E-state_asserts/save.png"
import chat from "../../assets/E-state_asserts/chat.png"

const Card = ({item}) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className='imgContainer'>
      <img src={item.image} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link 
          to={`/${item.id}`}
          >{item.title}</Link>
        </h2>
        <p className="address">
          <img src={pin} alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt="" />
              <span>{item.bedrooms} bedroom</span>
            </div>
            <div className="feature">
              <img src={bath} alt="" />
              <span>{item.bathroom} bedroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={save} alt="" />
              </div>
            <div className="icon">
              <img src={chat} alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
