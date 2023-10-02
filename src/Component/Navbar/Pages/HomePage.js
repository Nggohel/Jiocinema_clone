import CarouselCard from "../../Carousel/Carousel";
import HotRightNow from "../../HotRightNow/HotRightNow";
import PotraitCarousel from "../../PotraitCarousel/PotraitCarousel";
import LandscapCarousel from "../../LandscapCarousel/LandscapCarousel";

function HomePage() {
  return (
    <>
      <CarouselCard />
      <HotRightNow />
      <PotraitCarousel />
      <LandscapCarousel />
    </>
  );
}
export default HomePage;

// five routes all nav ke
// > ka route
// on click of card detail page bane ka
//react.portal
