import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routes from "../Routes";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default Layout;
