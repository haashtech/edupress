import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { OpenProvider } from "../contextApi/OpenProvider";

function Root() {
  return (
    <>
      <OpenProvider>
        <Navbar />
        <Outlet />
      </OpenProvider>
    </>
  );
}

export default Root;
