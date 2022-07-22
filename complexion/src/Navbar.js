import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>Complexion: Utility</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              trackStyle={{ backgroundColor: "transparent" }}
              railStyle={{ height: "8px" }}
              handleStyle={{
                backgroundColor: "turquoise",
                outline: "none",
                border: "2px solid turquoise",
                boxShadow: "none",
                width: "13px",
                height: "13px",
                marginLeft: "-7px",
                marginTop: "-3px",
              }}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
