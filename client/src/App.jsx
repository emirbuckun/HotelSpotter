import React from "react";
import Header from "/src/components/layout/Header";
import Footer from "/src/components/layout/Footer";
import SearchBar from "/src/components/home/SearchBar";
import HotelList from "/src/components/home/HotelList";
import Login from "/src/components/auth/Login";
import Register from "/src/components/auth/Register";
import Payment from "/src/components/other/Payment";
import UserProfile from "/src/components/detail/UserProfile";
import Admin from "/src/components/admin/AdminPanel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <SearchBar />
                <HotelList />
              </>
            }
          />
          <Route path="/admin/:name" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
