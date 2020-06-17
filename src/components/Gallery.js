import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

const imagearray = [
  `https://res.cloudinary.com/stratmachine/image/upload/v1589645760/brands/soupbrand_apixpb.png`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420103/products/windex_svrvy5.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420097/products/voss_rvk8iy.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420091/products/vitamins_mv2ufy.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420027/products/vaseline_pkmff4.png`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420023/products/tide_f3ivxg.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420017/products/seventh_fzv8l4.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420012/products/olay_eny9pk.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592420005/products/mouthwash_q86ae0.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419999/products/milk_je0rwx.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419994/products/lysol_vvt75a.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419988/products/ketchup_msfhuo.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419982/products/juice_i782iu.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419827/products/icecream_tbu3td.png`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419823/products/haircare_rga1es.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419820/products/goldfish_dvpstq.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419817/products/drink_gef2xw.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419815/products/bundle_sdutub.jpg`,
  `https://res.cloudinary.com/stratmachine/image/upload/v1592419810/products/bounty_komuvp.jpg`
]

const Gallery = props => {  
  let images;
  let noImages;
  // Shuffle array
  const shuffled = imagearray.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 6);
  // map variables to each item in fetched image array and return image component
  if (selected.length > 0) {
    images = selected.map((image, index) => {      
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
