import React from "react";
import Register from "/src/components/Register";
import Login from "/src/components/Login";
/*import HotelListingHeader from "/src/components/HotelListingHeader";
import HotelListing from "/src/components/HotelListing";
import HotelListingFooter from "/src/components/HotelListingFooter"; */
import Payment from "/src/components/Payment";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/payment" element={<Payment />} />

        {/*  <Route
          path="/home"
          exact
          element={
            <React.Fragment>
              <div className="container mb-4">
                <HotelListingHeader />
              </div>

              <div class="container text-center mb-4">
                <div class="row">
                  <div class="col">
                    <HotelListing />
                  </div>
                  <div class="col">
                    <HotelListing />
                  </div>
                  <div class="col">
                    <HotelListing />
                  </div>
                </div>
              </div>

              <div class="container text-center mb-4">
                <div class="row">
                  <div class="col">
                    <HotelListing />
                  </div>
                  <div class="col">
                    <HotelListing />
                  </div>
                  <div class="col">
                    <HotelListing />
                  </div>
                </div>
              </div>

              <div class="container text-center mb-4">
                <div class="row">
                  <div class="col">
                    <HotelListing />
                  </div>
                  <div class="col">
                    <HotelListing />
                  </div>
                  <div class="col">
                    <HotelListing />
                  </div>
                </div>
              </div>

              <HotelListingFooter />
            </React.Fragment>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
