'use client';

import '@mantine/carousel/styles.css';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Text } from '@mantine/core';
import classes from '@/styles/FeaturesCarousel.module.css';
import { useQuery } from '@/hooks/useQuery';
import { PiDevices } from 'react-icons/pi';
import { CgTimer } from 'react-icons/cg';
import { TbContrast2Filled } from 'react-icons/tb';
import { HiOutlineTranslate } from 'react-icons/hi';

export default function FeaturesCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  let slideSize;
  const isMobile = useQuery('(max-width: 768px)');
  isMobile ? (slideSize = '100%') : (slideSize = '50%');
  return (
    <Carousel
      withIndicators
      slideSize={slideSize}
      slideGap="sm"
      loop
      align="start"
      slidesToScroll={1}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={classes}
      className="max-w-full h-auto dark:text-primary000"
      id="features"
    >
      <Carousel.Slide className="dark:text-primary000 py-4">
        <div className="flex flex-col gap-2 m-2 p-2">
          <PiDevices size={62} />
          <Text className="text-5xl font-ranchers tracking-wide">Fully Responsive Design</Text>
          <Text className="text-2xl">
            Experience seamless readability and navigation whether you are on your desktop, mobile,
            or tablet. This app adapts to your device, ensuring a consistent and enjoyable browsing
            experience no matter where you are.
          </Text>
        </div>
      </Carousel.Slide>
      <Carousel.Slide className="bg-primaryOne py-4">
        <div className="flex flex-col gap-2 m-2 p-2">
          <CgTimer size={62} />
          <Text className="text-5xl font-ranchers tracking-wide">Up-to-Date Articles</Text>
          <Text className="text-2xl">
            Stay at the forefront of technology with real-time article updates. The content is
            dynamically fetched from a cloud CMS, ensuring that you receive the latest insights and
            developments in the tech world as soon as they happen.
          </Text>
        </div>
      </Carousel.Slide>
      <Carousel.Slide className="dark:text-primary000 py-4">
        <div className="flex flex-col gap-2 m-2 p-2">
          <TbContrast2Filled size={62} />
          <Text className="text-5xl font-ranchers tracking-wide">Theming</Text>
          <Text className="text-2xl">
            Personalize your reading experience to match your unique style and preferences. Light
            and dark modes are available, to create a visually appealing environment that suits your
            tastes. The blog is designed with clean and pretty code snippets, complemented by
            refined CSS, ensuring readability too.
          </Text>
        </div>
      </Carousel.Slide>
      <Carousel.Slide className="bg-primaryOne py-4">
        <div className="flex flex-col gap-2 m-2 p-2">
          <HiOutlineTranslate size={62} />
          <Text className="text-5xl font-ranchers tracking-wide">Dual Language Availability</Text>
          <Text className="text-2xl">
            Break language barriers effortlessly with the dual-language feature. Each of the blog
            articles is meticulously written in both English and Japanese, catering to diverse
            linguistic preferences seamlessly.
          </Text>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
