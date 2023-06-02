import React, { useEffect, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import "./hotelPhoto.css";

const HotelPhoto = (hotelData) => {
  const data = hotelData.hotelData;
  const pictures = data.pictures.picture;
  const [images, setImages] = useState([]);
  const defaultImage = [
    {
      image:
        "https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg",
    },
  ];

  useEffect(() => {
    setImages([]);
    if (pictures.length > 0) {
      pictures.map(function (picture) {
        setImages((prevState) => [...prevState, { image: picture }]);
      });
    }
  }, [data]);

  return (
    <div className="container text-center">
      <h2>
        {data.name} ({data.location.city}, {data.location.country})
      </h2>
      <Carousel
        data={images.length > 0 ? images : defaultImage}
        time={2000}
        width="850px"
        height="500px"
        radius="10px"
        slideNumber={true}
        slideNumberStyle={{ fontSize: "20px", fontWeight: "bold" }}
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="none"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "2rem auto 8rem auto",
          opacity: "inherit !important",
        }}
      />
    </div>
  );
};

export default HotelPhoto;
