import React from "react";
import Home from "/src/web/pages/Home";
import Login from "/src/web/pages/Login";
import Register from "/src/web/pages/Register";
import Payment from "/src/web/pages/Payment";
import UserProfile from "/src/web/pages/UserProfile";
import Admin from "/src/admin//pages/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
