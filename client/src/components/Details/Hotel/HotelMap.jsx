import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import axios from "axios";

const HotelMap = (hotelData) => {
  const data = hotelData.hotelData;
  const [latitude, setLatitude] = useState(data.location.latitude);
  const [longitude, setLongitude] = useState(data.location.longitude);
  const [address, setAddress] = useState("Loading Address...");

  const handleGetAddress = async () => {
    try {
      const response = await axios.get("https://geocode-maps.yandex.ru/1.x/", {
        params: {
          apikey: apiKey,
          geocode: `${longitude},${latitude}`,
          lang: "en_US",
        },
      });

      const xmlData = response.data;

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "application/xml");

      const addressNode = xmlDoc.querySelector(
        "GeoObjectCollection featureMember GeoObject metaDataProperty GeocoderMetaData text"
      );

      const address = addressNode.textContent;
      setAddress(address);
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address");
    }
  };

  useEffect(() => {
    setLatitude(data.location.latitude);
    setLongitude(data.location.longitude);
    handleGetAddress();
  }, []);

  return (
    <div className="d-flex justify-content-center my-4">
      <YMaps
        query={{
          lang: "en_US",
          apikey: apiKey,
        }}
      >
        <Map
          defaultState={{
            center: latitude && longitude ? [latitude, longitude] : [0, 0],
            zoom: 18,
          }}
          width="60vw"
          height="40vh"
        >
          <Placemark
            geometry={latitude && longitude ? [latitude, longitude] : [0, 0]}
            options={{
              preset: "islands#redIcon",
            }}
            properties={{
              hintContent: "Click to see the address",
              balloonContent: address,
            }}
            modules={["geoObject.addon.hint", "geoObject.addon.balloon"]}
          />
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default HotelMap;
