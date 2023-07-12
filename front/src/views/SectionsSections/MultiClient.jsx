import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

const MultiItemCarousel = ({ items, itemsPerPage }) => {

  console.log('items.', items.length)
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === Math.ceil(items.length / itemsPerPage) - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? Math.ceil(items.length / itemsPerPage) - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slicedItems = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    slicedItems.push(items.slice(i, i + itemsPerPage));
  }

  const slides = slicedItems.map((slice, index) => (
    <CarouselItem key={index}>
      <div className="row  justify-content-center">
        {slice.map((item, itemIndex) => (
          <div key={itemIndex} className={`col-lg-${12 / itemsPerPage} col-md-6`}>
            {item.content}
          </div>
        ))}
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel fade={true} slide={false} activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators className='mt-1' items={slicedItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
};

export default MultiItemCarousel;
