import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import HotelListing from "./components/HotelListing";
import Footer from "./components/Footer";
import Payment from "./components/Payment";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/payment" element={<Payment />} />

        <Route
          path="/home"
          exact
          element={
            <React.Fragment>
              <div className="container mb-4 mx-4">
                <Header />
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

              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
