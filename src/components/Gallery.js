import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

const imagearray = [
  `https://res.cloudinary.com/stratmachine/image/upload/v1589645760/brands/soupbrand_apixpb.png`
]

const Gallery = props => {  
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (imagearray.length > 0) {
    images = imagearray.map((image, index) => {      
      let id = index
      let url = image

      return <Image url={url} key={id} alt={'image'} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
