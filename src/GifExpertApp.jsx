

import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


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
      <h1>Buscador de Gifs</h1>

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
