/* eslint-disable prettier/prettier */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountrySearch from "../Pages/CountrySearch";
import Header from "./Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountrySearch />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;
