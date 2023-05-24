import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function HotelDetailsInformations() {
  useEffect(() => {
    const initializeMap = () => {
      ymaps.ready(() => {
        const myMap = new ymaps.Map(
          "map",
          {
            center: [55.661574, 37.573856],
            zoom: 18,
          },
          {
            searchControlProvider: "yandex#search",
          }
        );

        const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );

        const myPlacemarkWithContent = new ymaps.Placemark(
          [55.661574, 37.573856],
          {
            hintContent: "A custom placemark icon with contents",
            balloonContent: "This one — for Christmas",
          },
          {
            iconLayout: "default#imageWithContent",
            iconImageHref: "images/marker.png",
            iconImageSize: [32, 32],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout,
          }
        );

        myMap.geoObjects.add(myPlacemarkWithContent);
      });
    };

    initializeMap();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <script
          src="https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=46370e8f-7555-4a20-a1b8-43e31f1ed845"
          type="text/javascript"
        />
        <style>{`
          html, body, #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
          }
        `}</style>
      </Helmet>
      <div id="map" style={{ width: "100%", height: "100%" }} />
    </React.Fragment>
  );
}

export default HotelDetailsInformations;
