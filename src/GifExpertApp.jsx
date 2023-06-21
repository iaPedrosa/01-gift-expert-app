// API GIF
// l6QY9LzoniKoGtmEJvU5EmCPZLpPNfPI

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Harry Potter",
    "Breaking Bad",
  ]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory,...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <AddCategory setCategories={setCategories}/> */}
      <AddCategory 
        onNewCategory={ onAddCategory}
      
      />

      {/* Listado de Gif */}

      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
