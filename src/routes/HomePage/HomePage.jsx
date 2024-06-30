import React from "react";
import "./HomePage.scss";
import bg from "../../assets/E-state_asserts/bg.png";
import SearchBar from "../../Components/SearchBar/SearchBar.jsx";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h2>Find Real Estate & Get Your Dream Place</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            iste sint magnam, reiciendis mollitia expedita provident eaque fugit
            nemo id aliquid quasi blanditiis illum voluptatem ut quis, officia
            eveniet libero.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <h3>Years Of Experience</h3>
            </div>
            <div className="box">
              <h2>200</h2>
              <h3>Award Gained</h3>
            </div>
            <div className="box">
              <h2>1200</h2>
              <h3>Property Ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
