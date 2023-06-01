import React from "react";

const HotelInfo = (hotelData) => {
  const data = hotelData.hotelData;
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          There is a gym and fitness center. This hotel offers suite rooms to
          its customers. 3 meals are served. Customers have the opportunity to
          eat unlimitedly. Indoor and outdoor swimming pool available This hotel
          is by the sea. Hotel is located in Malaga and the most important
          feature of this city is.. There is a gym and fitness center. This
          hotel offers suite rooms to its customers. 3 meals are served.
          Customers have the opportunity to eat unlimitedly. Indoor and outdoor
          swimming pool available This hotel is by the sea. Hotel is located in
          Malaga and the most important feature of this city is..
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">700 USD per Day</h5>
              <p className="card-text">780 USD including VAT</p>
              <a href="#" className="btn btn-danger">
                Reserve
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
