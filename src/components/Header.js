import React from "react";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Our Offer Today</h1>     
      <Navigation />
    </div>
  );
};

export default Header;
