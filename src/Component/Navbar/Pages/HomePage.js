import CarouselCard from "../../Carousel/Carousel";
import HotRightNow from "../../HotRightNow/HotRightNow";
import PotraitCarousel from "../../PotraitCarousel/PotraitCarousel";
import LandscapCarousel from "../../LandscapCarousel/LandscapCarousel";
import JiocinemaFooter from "../../Footer/JiocinemaFooter";
import TvShowPotraitCarousel from "../../PotraitCarousel/TvShowPotraitCarousel";
import ShortFilmPotraitCarousel from "../../PotraitCarousel/ShortFilmPotraitCarousel";
import VideoSongPotraitCarousel from "../../PotraitCarousel/VideoSongPotraitCarousel";
import TrailerLandscapCarousel from "../../LandscapCarousel/TrailerLandscapCarousel";
import WebSeriesLandscapCarousel from "../../LandscapCarousel/WebSeriesLandscapCarousel";
function HomePage() {
  return (
    <>
      <CarouselCard />
      <HotRightNow />
      <TrailerLandscapCarousel />
      <PotraitCarousel />
      <TvShowPotraitCarousel />
      <WebSeriesLandscapCarousel />
      <VideoSongPotraitCarousel />
      <ShortFilmPotraitCarousel />
      <LandscapCarousel />
      <PotraitCarousel />
      <JiocinemaFooter />
    </>
  );
}
export default HomePage;

// five routes all nav ke
// > ka route
// on click of card detail page bane ka
//react.portal
