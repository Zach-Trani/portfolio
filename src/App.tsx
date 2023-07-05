import React from "react";
import { Navbar } from "./Components/Layout/Navbar";
import { Greeting } from "./Components/Layout/Greeting";
import { Footer } from "./Components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <Footer />
    </div>
  );
}

export default App;
