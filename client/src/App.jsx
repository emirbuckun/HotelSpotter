import React from "react";
import Header from "/src/components/Layout/Header";
import Footer from "/src/components/Layout/Footer";
import Home from "/src/components/Home/Home";
import Login from "/src/components/Auth/Login";
import Register from "/src/components/Auth/Register";
import Payment from "/src/components/Other/Payment";
import UserProfile from "/src/components/Details/User/UserProfile";
import Admin from "/src/components/Admin/AdminPanel";
import HotelDetails from "/src/components/Details/Hotel/HotelDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin/:name" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/hotel-details" element={<HotelDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
