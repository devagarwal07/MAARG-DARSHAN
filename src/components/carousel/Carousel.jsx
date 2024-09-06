"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgURL: "/innerbg.png", alt: "smartwatch" },
  { imgURL: "/innerbg.png", alt: "bag" },
  { imgURL: "/innerbg.png", alt: "lamp" },
  { imgURL: "/innerbg.png", alt: "air fryer" },
  { imgURL: "/innerbg.png", alt: "chair" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            key={image.alt} // Ensures unique key for each Image component
            src={image.imgURL}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>

    </div>
  );
};

export default HeroCarousel;
