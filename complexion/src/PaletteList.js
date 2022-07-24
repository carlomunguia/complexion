import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>Complexion Colors</h1>
        {palettes.map((palette) => (
          <MiniPalette {...palette} key={palette.id} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
