import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 text-center bg-blue-400 border border-blue-400">
        <Carousel autoPlay infiniteLoop  thumbWidth={200} >
          <div className="h-[600px] ">
            <img  src="https://i.ibb.co.com/tmT4CK3/photo-1592861956120-e524fc739696.jpg" />
          </div>
          <div className="h-[600px] ">
            <img  src="https://i.ibb.co.com/dKkctv2/food-photography-4k-839182-2115.jpg" />
          </div>
          <div className="h-[600px] ">
            <img src="https://i.ibb.co.com/pKjP1wd/dark-background-1024x683.jpg" />
          </div>
          <div className="h-[600px] ">
            <img src="https://i.ibb.co.com/JFW6FqN/Hyderabadi-Biryani-1.webp" />
          </div>
          <div className="h-[600px] ">
            <img src="https://i.ibb.co.com/MBjXVjC/mediterranean-cuisine-2378758-1280.jpg" />
          </div>
          <div className="h-[600px] ">
            <img
              className=""
              src="https://i.ibb.co.com/WkxWfHT/delicious-lobster-gourmet-seafood-23-2151713033.jpg"
            />
          </div>
          {/* <div className="h-[500px]">
            <img
              className=""
              src="https://i.ibb.co.com/cKH0tVyQ/original-a709c12b0b47bd3284000294a318ea46.webp"
            />
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
