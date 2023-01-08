import React from "react"
import Navbar from "./jsx /Navbar"
import Home from "./jsx /Home";
import Skills from "./jsx /Skills";
import Code from "./jsx /Code";
import './App.css';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Home />
   <Skills />
   <Code />
    </div>
  );
}

export default App;
