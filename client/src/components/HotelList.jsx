import React from "react";

const HotelList = () => {
  return (
    <>
      <div className="container text-center mb-4">
        <div className="row">
          <div className="col">
            <HotelCard />
          </div>
          <div className="col">
            <HotelCard />
          </div>
          <div className="col">
            <HotelCard />
          </div>
        </div>
      </div>

      <div className="container text-center mb-4">
        <div className="row">
          <div className="col">
            <HotelCard />
          </div>
          <div className="col">
            <HotelCard />
          </div>
          <div className="col">
            <HotelCard />
          </div>
        </div>
      </div>

      <div className="container text-center mb-4">
        <div className="row">
          <div className="col">
            <HotelCard />
          </div>
          <div className="col">
            <HotelCard />
          </div>
          <div className="col">
            <HotelCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelList;

const HotelCard = () => {
  return (
    <div className="card" style={{ width: "350px", borderRadius: "15px" }}>
      <img
        src="https://hotel-su-antalya.hotel-ds.com/data/Imgs/700x500/11087/1108736/1108736295/hotel-su-antalya-img-1.JPEG"
        className="img-fluid"
        alt="Sampleimage"
        style={{
          height: "225px",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title mb-0">Malaga, Spain</h5>
          <p className="card-text">Valentine Hotel</p>
          <p className="card-text">All inclusive</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <span className="badge badge-primary"></span>
            <strong>#{6.8}</strong>
          </div>
          <div className="text-end">
            <strong>$100</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
