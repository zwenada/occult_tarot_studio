import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Index/Home";
import Tarot from "./Index/Tarot";
import Profiles from "./about/Profiles";
import AboutContent from "./about/AboutContent";
import Packages from "./services/Packages";
import GetStart from "./services/GetStart";
import Ritual from "./services/Ritual";
import UserList from "./pages/UserList";
import DashboardCharts from "./pages/DashboardCharts";

// Combine components for the home page
const Index = () => {
  return (
    <>
      <Home />
      <Tarot />
    </>
  );
};

// Combine components for the About Us page
const AboutUs = () => {
  return (
    <>
      <AboutContent />
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Profiles />
    </>
  );
};

const Services = () => {
  return (
    <>
      <Packages />
      <Ritual />
      <GetStart />
    </>
  );
};

// Admin Dashboard Component
const Admin = () => {
  return (
    <>
      <UserList />
      <DashboardCharts />
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="Home">
                  <Index />
                </div>
                <div id="Services">
                  <Services />
                </div>
                <div id="AboutUs">
                  <AboutUs />
                </div>
                <div id="Contact">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
