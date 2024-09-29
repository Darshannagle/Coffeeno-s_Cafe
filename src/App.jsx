import React from "react";
import ResponsiveAppBar from "./Header";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import Products from "./Products";
import Home from "./Main";
import Gift from "./Gift";
import Order from "./Order";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          margin: 0,
          padding: 0,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(rgba(95, 37, 5, 1),rgba(197, 77, 10, 1)) ",
        }}
      >
        <ResponsiveAppBar />
        {/* <Main/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Gift" element={<Gift />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/about" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
