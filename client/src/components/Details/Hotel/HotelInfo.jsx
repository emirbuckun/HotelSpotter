import React from "react";

const HotelInfo = (id) => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <div
        className="sticky-md-top"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="card" style={{ width: "18rem", alignItems: "center" }}>
          <div className="card-body">
            <h5 className="card-title">700 USD per Day</h5>
            <p className="card-text">780 USD including VAT</p>
            <a href="#" className="btn btn-danger">
              Reserve
            </a>
          </div>
        </div>
      </div>
      <h4>There is a gym and fitness center.</h4>
      <h4>This hotel offers suite rooms to its customers.</h4>
      <h4>
        3 meals are served. Customers have the opportunity to eat unlimitedly.
      </h4>
      <h4>Indoor and outdoor swimming pool available</h4>
      <h4>This hotel is by the sea.</h4>
      <h4>
        Hotel is located in Malaga and the most important feature of this city
        is..
      </h4>

      <h4>There is a gym and fitness center.</h4>
      <h4>This hotel offers suite rooms to its customers.</h4>
      <h4>
        3 meals are served. Customers have the opportunity to eat unlimitedly.
      </h4>
      <h4>Indoor and outdoor swimming pool available</h4>
      <h4>This hotel is by the sea.</h4>
      <h4>
        Hotel is located in Malaga and the most important feature of this city
        is..
      </h4>
    </div>
  );
};

export default HotelInfo;
