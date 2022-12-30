import React from "react";
import ReactDom from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Layout from "./layout";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
