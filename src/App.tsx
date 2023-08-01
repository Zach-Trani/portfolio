import React from "react";
import { Navbar } from "./Components/Layout/Navbar";
import { Greeting } from "./Components/Layout/Greeting";
import { Footer } from "./Components/Layout/Footer";
import { Contact } from "./Components/Layout/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
