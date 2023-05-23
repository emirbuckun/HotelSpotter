import React from "react";
import Register from "/src/components/Register";
import Login from "/src/components/Login";
import Header from "/src/components/Header";
import HotelListing from "/src/components/HotelListing";
import Footer from "/src/components/Footer";
import Payment from "/src/components/Payment";
import HotelDetails from "/src/components/HotelDetails";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/payment" element={<Payment />} />

        <Route
          path="/hoteldetails"
          exact
          element={
            <React.Fragment>
              <div className="container mb-4 mx-4">
                <Header />
              </div>
              <div className="row">
                <HotelDetails />
              </div>
              <div className="container mb-4 mx-4">
                <Footer />
              </div>
            </React.Fragment>
          }
        />

        <Route
          path="/"
          exact
          element={
            <React.Fragment>
              <div className="container mb-4 mx-4">
                <Header />
              </div>

              <div className="container text-center mb-4">
                <div className="row">
                  <div className="col">
                    <HotelListing />
                  </div>
                  <div className="col">
                    <HotelListing />
                  </div>
                  <div className="col">
                    <HotelListing />
                  </div>
                </div>
              </div>

              <div className="container text-center mb-4">
                <div className="row">
                  <div className="col">
                    <HotelListing />
                  </div>
                  <div className="col">
                    <HotelListing />
                  </div>
                  <div className="col">
                    <HotelListing />
                  </div>
                </div>
              </div>

              <div className="container text-center mb-4">
                <div className="row">
                  <div className="col">
                    <HotelListing />
                  </div>
                  <div className="col">
                    <HotelListing />
                  </div>
                  <div className="col">
                    <HotelListing />
                  </div>
                </div>
              </div>

              <div className="container mb-4 mx-4">
                <Footer />
              </div>
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
