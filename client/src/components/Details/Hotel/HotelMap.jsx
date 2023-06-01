import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import axios from "axios";

const HotelMap = () => {
  const [address, setAddress] = useState("Loading Address...");
  const [coordinates, _] = useState([40.916661, 29.203657]);

  const handleGetAddress = async () => {
    try {
      const response = await axios.get("https://geocode-maps.yandex.ru/1.x/", {
        params: {
          apikey: "46370e8f-7555-4a20-a1b8-43e31f1ed845",
          geocode: `${coordinates[1]},${coordinates[0]}`,
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
    handleGetAddress();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <YMaps
            query={{
              lang: "en_US",
              apikey: "46370e8f-7555-4a20-a1b8-43e31f1ed845",
            }}
          >
            <Map
              defaultState={{
                center: coordinates,
                zoom: 18,
              }}
              width="650px"
              height="450px"
            >
              <Placemark
                geometry={coordinates}
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
      </div>
    </div>
  );
};

export default HotelMap;
