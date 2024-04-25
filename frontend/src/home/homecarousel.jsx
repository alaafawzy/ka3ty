import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap'; // Import components

const images = [
    {
      src: '/images/5.webp',
      alt: 'Slide 1 image',
      caption: 'Slide 1 caption' // Optional
    },
    {
      src: '/images/6.jpg',
      alt: 'Slide 2 image',
      caption: 'Slide 2 caption' // Optional
    },
    {
      src: '/images/7.webp',
      alt: 'Slide 3 image',
      caption: 'Slide 3 caption' // Optional
    },
    // ... more slides
  ];

function HomeCarousel() {
    return(
        <>
        <Carousel className='home-carousel'>
      {images.map((image) => (
        <CarouselItem key={image.src} className='home-carousel'>
          <img
            className="d-block w-100 home-carousel-image"
            src={image.src}
            alt={image.altText}
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
            {/* Add more content to the caption as needed */}
          </Carousel.Caption>
        </CarouselItem>
      ))}
    </Carousel>
        </>
    );
}
export default HomeCarousel;