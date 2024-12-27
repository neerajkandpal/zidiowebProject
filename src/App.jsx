import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import Category from "./category";
import About from "./about";
import Services from "./services";
import Teams from "./teams";
import Contact from "./contact";
import Footer from "./footer";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <About />
      <Services />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
