import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Navbar, SideNav } from "../../components";

function Notes() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNav />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export { Notes };
