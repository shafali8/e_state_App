import React from "react";
import "./singlePage.scss";
import Slider from "../../Components/Slider/Slider";
import Map from "../../Components/Map/Map";
import { singlePageData, useData } from "../../lib/dummydata";
import pin from "../../assets/E-state_asserts/pin.png"
import save from "../../assets/E-state_asserts/save.png"
import chat from "../../assets/E-state_asserts/chat.png"
import utility from "../../assets/E-state_asserts/utility.png"
import pet from "../../assets/E-state_asserts/pet.png"
import fees from "../../assets/E-state_asserts/fee.png"
import size from "../../assets/E-state_asserts/size.png"
import bath from "../../assets/E-state_asserts/bath.png"
import bed from "../../assets/E-state_asserts/bed.png"
import school from "../../assets/E-state_asserts/school.png"
import bus from "../../assets/E-state_asserts/bus.png"
// import restaurent from "../../assets/E-state_asserts/restaurent.png"



const SinglePage = () => {
  return (
  <div className="singlePage">
    <div className="details">
      <div className="wrapper">
        {/* House Tour */}
        <Slider images={singlePageData.images}/>

       {/* House iNFORMATION */}
        <div className="info">
          <div className="top">
            <div className="post">
              <h2>{singlePageData.title}</h2>
              <div className="address">
                <img src={pin} alt="" />
                <span>{singlePageData.address}</span>
              </div>
              <div className="price">$ {singlePageData.price}</div>
            </div>

               {/* Buyer info */}
            <div className="user">
              <img src={useData.img} alt="" />
              <span>{useData.name}</span>
            </div>
          </div>

          <div className="bottom">
            {singlePageData.description}
          </div>
        </div>
      </div>
    </div>

    <div className="features">
      <div className="wrapper1">
        <p className="title">General</p>
        <div className="listVertical">
          {/* Utility Feature */}
         <div className="feature">
          <img src={utility} alt="" />
          <div className="featureText">
           <span>Utility</span>
           <p>Renter is responsiable</p>
          </div>
         </div>
         
             {/* Pet Policy */}
         <div className="feature">
          <img src={pet} alt="" />
          <div className="featureText">
           <span>Pet Policy</span>
           <p>Pet Allowed</p>
          </div>
         </div>
            {/* Property Fee */}
         <div className="feature">
          <img src={fees} alt="" />
          <div className="featureText">
           <span>Property Fees</span>
           <p>Must have 3x the rent in total household income</p>
          </div>
         </div>
        </div>

        <p className="title">Sizes</p>
        <div className="sizes">
        <div className="size">
          <img src={size} alt="" />
          <span>80 sqft</span>
        </div>
        <div className="size">
          <img src={bed} alt="" />
          <span>2 beds</span>
        </div>
        <div className="size">
          <img src={bath} alt="" />
          <span>1 bathrooms</span>
        </div>
        </div>
        

        <p className="title">Nearby Places</p>
        <div className="listHorizontal">
          {/* sSchool */}
          <div className="feature">
          <img src={school} alt="" />
          <div className="featureText">
           <span>School</span>
           <p>250m away</p>
          </div>
         </div>

         {/* bus stop */}
         <div className="feature">
          <img src={bus} alt="" />
          <div className="featureText">
           <span>Bus</span>
           <p>100m away</p>
          </div>
         </div>

         {/* restaurent */}
         <div className="feature">
          <img src={fees} alt="" />
          <div className="featureText">
           <span>Restaurent</span>
           <p>200m away</p>
          </div>
         </div>

        </div>

        <p className="title">Location</p>
        <div className="mapContainer">
          <Map items={[singlePageData]}/>
        </div>

        <div className="buttons">
          <button>
            <img src={chat} alt="" />
            Send a message
          </button>
          <button>
            <img src={save} alt="" />
            Save the place
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SinglePage;
