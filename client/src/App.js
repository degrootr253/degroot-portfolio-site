import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About Me";
import Contact from "./components/Contact Form"
import Projects from "./components/Projects";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" component={<About />} />
        <Route path="/projects" component={<Projects />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
