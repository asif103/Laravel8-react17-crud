import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function Index() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default Index;

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
