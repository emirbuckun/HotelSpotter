import React from "react";
import { Carousel } from "react-carousel-minimal";

const HotelPhoto = (hotelData) => {
  const data = hotelData.hotelData;
  const image = [
    "https://hotel-su-antalya.hotel-ds.com/data/Imgs/700x500/11087/1108736/1108736295/hotel-su-antalya-img-1.JPEG",
  ];
  return (
    <div className="container text-center">
      <h2>Valentine Hotel</h2>
      <p>Malaga, Spain</p>
      <Carousel
        data={image}
        dots={true}
        width="80vw"
        radius="2rem"
        thumbnails={true}
        slideNumber={true}
        slideNumberStyle={{ fontSize: "2rem" }}
        slideBackgroundColor="darkgrey"
      />
    </div>
  );
};

export default HotelPhoto;
