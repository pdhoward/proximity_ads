import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>Specials</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
