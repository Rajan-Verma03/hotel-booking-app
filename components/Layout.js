import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="content">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
