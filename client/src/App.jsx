import React from "react";
import Register from "/src/components/Register";
import Login from "/src/components/Login";
import Header from "/src/components/Header";
import HotelListing from "/src/components/HotelListing";
import Footer from "/src/components/Footer";
import Payment from "/src/components/Payment";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/payment" element={<Payment />} />

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

              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
