

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Harry Potter"
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      alert("Ya existe esa categoria");
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <AddCategory setCategories={setCategories}/> */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gif */}

      {/* <button onClick={onAddCategory}>Agregar</button> */}
      
        {categories.map((category) => (
          <GifGrid category={category} key={category}/>
        ))
        }
      
      {/* Gif Item */}
    </>
  );
};
