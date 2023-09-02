import React, { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // useEffect(() =>
  //  { getGifs(category).then( newImages => setImages(newImages));

  // },[])

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

    
  <div className="card-grid">
        {images.map((image) => (
          <GifItem
           key={ image.id}
           {...image}
            />

          
        ))}

    
  </div>

 

    </>
  );
};
