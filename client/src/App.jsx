import React from "react";
import Register from "/src/components/Register";
import Login from "/src/components/Login";
import Header from "/src/components/Header";
import HotelList from "/src/components/HotelList";
import Footer from "/src/components/Footer";
import Payment from "/src/components/Payment";
import SearchBar from "/src/components/SearchBar";
import UserProfile from "/src/components/UserProfile";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <SearchBar />
              <HotelList />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
