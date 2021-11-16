import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from '../components/CarouselItem';

const HomepageCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
  return (
    <section>
      <Carousel responsive={responsive} infinite={true}>
        <CarouselItem/>
        <CarouselItem/>
        <CarouselItem/>
        <CarouselItem/>
        <CarouselItem/>
        <CarouselItem/>
        <CarouselItem/>
        <CarouselItem/>
      </Carousel>
    </section>
  )
}

export default HomepageCarousel;