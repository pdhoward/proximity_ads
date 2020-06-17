import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>Specials - 15% off today only</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
