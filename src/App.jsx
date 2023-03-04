/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Pet from "./components/Pet";



const App = () => {
  const [count, setCount] = useState(1)
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count +1 )}>add</button>
        <button onClick={() => setCount(count -1 )}>add</button>
        <Header />
        <Main />
        <Pet name="LUna" animal="dog" meal="bread" />
      </>
    )
}



const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
