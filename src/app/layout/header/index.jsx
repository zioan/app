import React from "react";
//createing links for opa
import { Link } from "react-router-dom";
import "./style.css";

export default function Header({}) {
  return (
    <div className="__dml header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Store</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
