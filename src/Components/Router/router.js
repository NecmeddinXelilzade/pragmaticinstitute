import {BrowserRouter,Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Project from "../Projekt/Project";


const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Project />} />
        {/* <Route path="/main" element={<Home />} /> */}
      </Routes>
      </BrowserRouter>

    </>
  );
};

export default Router;
