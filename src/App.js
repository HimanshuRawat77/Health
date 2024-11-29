import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home";
import Results from "./Component/Results";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
