import React from "react";
import useFetch from "/src/hooks/useFetch";

const HotelList = () => {
  const { data } = useFetch(serverURL + "/hotel");

  return (
    <div className="container text-center">
      <div className="row">
        {data.length > 0 &&
          data.map((data, index) => (
            <div key={index} className="col-lg-4 col-md-6 my-3 d-flex">
              <HotelCard key={index} data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HotelList;

const HotelCard = (data) => {
  const hotel = data.data;
  return (
    <div id={hotel._id} className="card" style={{ borderRadius: "15px" }}>
      <img
        src="https://hotel-su-antalya.hotel-ds.com/data/Imgs/700x500/11087/1108736/1108736295/hotel-su-antalya-img-1.JPEG"
        className="img-fluid"
        alt="Sampleimage"
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title mb-0">Location</h5>
          <p className="card-text">{hotel.name}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <span className="badge badge-primary"></span>
            <strong>#{hotel.rating}</strong>
          </div>
          <div className="text-end">
            <strong>$100</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
