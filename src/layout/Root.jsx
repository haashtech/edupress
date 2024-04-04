import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { OpenProvider } from "../contextApi/OpenProvider";
import Footer from "../components/footer/Footer";

function Root() {
  return (
    <>
      <OpenProvider>
        <Navbar />
        <Outlet />
        <Footer/>
      </OpenProvider>
    </>
  );
}

export default Root;
