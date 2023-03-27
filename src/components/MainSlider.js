import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

export const MainSlider = () => {
  return (
    <Splide
      aria-label='Slider Images'
      options={{
        rewind: true,
        width: 1200,
        pagination: false,
        arrows: true,
      }}
    >
      <SplideSlide>
        <Image
          src='/images/sliderimage.jpg'
          alt='slider-image'
          width={1200}
          height={1200}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src='/images/sliderimageone.jpg'
          alt='slider-image'
          width={1200}
          height={1200}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src='/images/sliderimagetwo.jpg'
          alt='slider-image'
          width={1200}
          height={1200}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src='/images/sliderthree.jpg'
          alt='slider-image'
          width={1200}
          height={1200}
        />
      </SplideSlide>
    </Splide>
  );
};
