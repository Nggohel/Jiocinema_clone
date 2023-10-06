import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JioCinemaNavBar from "./JioCinemaNavBar";
import HomePage from "./Pages/HomePage";
import SubscribePage from "./Pages/SubscribePage";
import SportPage from "./Pages/SportPage";
import MoviesPage from "./Pages/MoviesPage";
import NewsPage from "./Pages/NewsPage";
import PotraitCard from "../AllPotraitData/PotraitCard";
import LandscapeCard from "../AllLandsacpeData/LandscapeCard";
import Login from "../Login/Login";
import TvshowPage from "./Pages/TvshowPage";
import SingUp from "../Singup/SingUp";
function MainNavigation() {
  return (
    <>
      <Router>
        <JioCinemaNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/foryou" element={<HomePage />} />
          <Route path="/sport" element={<SportPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvshow" element={<TvshowPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/Moredatapotrait" element={<PotraitCard />} />
          <Route path="/backtohome" element={<HomePage />} />
          <Route path="/Moredatalandscape" element={<LandscapeCard />} />
          <Route path="/back" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </Router>
    </>
  );
}
export default MainNavigation;
