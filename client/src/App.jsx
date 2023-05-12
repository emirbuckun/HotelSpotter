import React from "react";
import Register from "/src/components/Register";
import Login from "/src/components/Login";
import Header from "/src/components/Header";
import HotelListing from "/src/components/HotelListing";
import Footer from "/src/components/Footer";
import Payment from "/src/components/Payment";
import SearchBar from "/src/components/SearchBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/searchbar" element={<SearchBar />} />

        <Route
          path="/home"
          exact
          element={
            <React.Fragment>
              <div className="container mb-4 mx-4">
                <Header />
              </div>

              <div className="container mb-4 mx-4">
                <SearchBar />
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
