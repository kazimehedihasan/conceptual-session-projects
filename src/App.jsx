import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./Components/Card/Card";

function App() {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
  ]
  return (
    <>
      <h1 className="text-center text-5xl text-red-600">hello world</h1>

      <div className="grid grid-cols-3 gap-7 px-12">
      {
        data.map((item) => {
          return <Card item={item} kye={item.id}/>
           
          
        })
      }
      </div>
    </>
  );
}

export default App;
