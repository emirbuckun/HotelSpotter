import React from "react";
import Home from "/src/pages/Home";
import Login from "/src/pages/Login";
import Register from "/src/pages/Register";
import Payment from "/src/pages/Payment";
import UserProfile from "/src/pages/UserProfile";
import HotelDetails from "/src/pages/HotelDetails";
import HotelDetailsInformations from "/src/components/HotelDetailsInformations";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
