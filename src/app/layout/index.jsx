import React from "react";
import "./style.css";

import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="__dml container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
