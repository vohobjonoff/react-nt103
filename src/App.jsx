/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Pet from "./components/Pet";
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h3", {}, props.meal),
//   ]);
// };

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello from react"),
//     Pet({ name: "Luna", animal: "dog", meal: "milk" }),
//     Pet({ name: "chihuahua", animal: "cat", meal: "bread" })
//   );
// };


const App = () => {
    return (
      <>
        
        <Header />
        <Pet name="LUna" animal="dog" meal="bread" />
      </>
    )
}



const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
