import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "../pages/Hero/Hero";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Admin from "../pages/Admin/Admin";
import TableScrollArea from "../pages/Admin/TableScrollArea";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Routers;
