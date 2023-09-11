import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hadder from "./component/Hadder";
import Home from "./component/Home";
import "./style/App.scss";
import Footer from "./component/Footer";
import Services from "./component/Services";
import "./style/mediaquert.scss";
function App() {
  return (
    <Router>
      <Hadder />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
