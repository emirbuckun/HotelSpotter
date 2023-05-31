import React from "react";
import useFetch from "/src/hooks/useFetch";

const HotelList = () => {
  const { data, loading } = useFetch(serverURL + "/hotel/getHotelList");
  return (
    <div className="container text-center">
      <div className="row">
        {loading ? (
          <div>Content loading..</div>
        ) : (
          data.length > 0 &&
          data.map((data, index) => (
            <div key={index} className="col-lg-4 col-md-6 my-3 d-flex">
              <HotelCard key={index} data={data} />
            </div>
          ))
        )}
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
        className="img-fluid card-img-top"
        alt="Hotel Image"
        style={{
          minHeight: "15rem",
          maxHeight: "15rem",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
        src={
          hotel.pictures != undefined
            ? hotel.pictures.picture
            : "https://hotel-su-antalya.hotel-ds.com/data/Imgs/700x500/11087/1108736/1108736295/hotel-su-antalya-img-1.JPEG"
        }
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title mb-0">{hotel.name}</h5>
          <p className="card-text">
            {hotel.location.city}, {hotel.location.country}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <span className="badge badge-primary"></span>
            <strong>Rating: {hotel.rating}</strong>
            <br></br>
            <strong>Star: {hotel.star}</strong>
          </div>
          <div className="text-end">
            <strong>$100</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
