import React from "react";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import SideNav from "./Layouts/SideNav";

const BaseContent = ({ children }) => {
  return (
    <>
      <Header />
      <SideNav />
      {children}
      <Footer />
    </>
  );
};

export default BaseContent;
