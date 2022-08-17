import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";
//these two now imported into Palette.js instead
// import seedColors from './seedColors';
// import { generatePalette } from './colorHelpers';
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";

function App() {
  return (
    <Routes>
      <Route path='/' element={<PaletteList palettes={seedColors} />} />
      <Route path='/palette/:paletteId' element={<Palette />} />
      <Route
        path='/palette/:paletteId/:colorId'
        element={<SingleColorPalette />}
      />
    </Routes>
  );
}

export default App;
