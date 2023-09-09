import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./Components/Card/Card";

function App() {
  return (
    <>
      <h1 className="text-center text-5xl text-red-600">hello world</h1>

      <div className="grid grid-cols-3 gap-7 px-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
