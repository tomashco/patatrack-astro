import { AdvancedImage } from '@cloudinary/react';
import cld from '~/cloudinaryConfig';
import { MantineProvider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import useKeypress from '~/hooks/useKeypress';

interface CarouselProps {
  gallery: Array<string>;
}

const ShowFullImage = ({ children }) => {
  return (
    <div className="fixed z-[998] w-full h-full top-0 left-0 bg-black bg-opacity-80 flex justify-center align-middle">
      <div className="fixed flex w-full h-full items-center justify-center">{children}</div>
    </div>
  );
};

const CarouselComponent = ({ gallery, action, isFullScreen = false }) => (
  <Carousel
    onClick={() => action((value) => !value)}
    maw={'100%'}
    mx="auto"
    withIndicators
    height={isFullScreen ? '100%' : '400'}
  >
    {gallery.map((slide) => (
      <Carousel.Slide key={slide}>
        <AdvancedImage cldImg={cld.image(slide)} />
      </Carousel.Slide>
    ))}
  </Carousel>
);

export default function CarouselContainer({ gallery }: CarouselProps) {
  const [isFullScreen, toggleFullScreen] = useState(false);

  useKeypress('Escape', () => {
    toggleFullScreen(false);
  });

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <CarouselComponent gallery={gallery} action={toggleFullScreen} />
      {isFullScreen && (
        <ShowFullImage>
          <strong
            onClick={() => toggleFullScreen(false)}
            className="drop-shadow-2xl fixed z-[998] w-9 h-9 flex justify-center items-center rounded-lg bg-opacity-80 bg-slate-400 top-0 right-0 font-black text-violet-400 text-3xl cursor-pointer alert-del"
          >
            &times;
          </strong>
          <CarouselComponent gallery={gallery} action={() => {}} isFullScreen />
        </ShowFullImage>
      )}
    </MantineProvider>
  );
}
