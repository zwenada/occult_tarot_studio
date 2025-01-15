import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Index/Home";
import Tarot from "./Index/Tarot";
import Card from "./Index/Card";

const Index = () => {
  return (
    <>
      <Home />
      <Tarot />
      <Card />
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="occult">
          <Routes>
            <Route path="/" Component={Index} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
