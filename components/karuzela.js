import React from "react";
import Carousel from "react-carousel";

const karuzela = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    // "/images/image3.jpg",
    // "/images/image4.jpg",
    // "/images/image5.jpg",
  ];

  return (
    <Carousel showArrows={true} infiniteLoop={true}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default karuzela;
