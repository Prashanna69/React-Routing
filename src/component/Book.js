import React from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Book {id}</h2>
    </>
  );
};

export default Book;
