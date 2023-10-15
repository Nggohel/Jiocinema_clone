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
import EditProfile from "../EditProfile/EditProfile";
import Details from "../AllDetailsPage/Details";
import Searchpage from "./Pages/Searchpage";
import GetVideos from "../AllDetailsPage/GetVideos";
import WatchList from "../WatchList/WatchList";
import MobileSearchPage from "../MobileSearch/MobileSearch";
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
          <Route path="/search/:query" element={<Searchpage />} />
          <Route path="/search" element={<PotraitCard />} />
          <Route path="/mobilesearch" element={<MobileSearchPage />} />
          <Route path="/mobilesearch/:query" element={<Searchpage />} />
          <Route path="/Moredatapotrait" element={<PotraitCard />} />
          <Route path="/backtohome" element={<HomePage />} />
          <Route path="/Moredatalandscape" element={<LandscapeCard />} />
          <Route path="/back" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/details/:itemId" element={<Details />} />
          <Route path="/gettingvideo/:video_url" element={<GetVideos />} />
        </Routes>
      </Router>
    </>
  );
}
export default MainNavigation;
