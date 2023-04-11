import { AdvancedImage } from '@cloudinary/react';
import cld from '~/cloudinaryConfig';
import { useState } from 'react';
import useKeypress from '~/hooks/useKeypress';
import { AspectRatio } from '@cloudinary/url-gen/qualifiers';

interface CarouselProps {
  gallery: Array<string>;
}

type imgState = {
  image: string;
  index: number;
};
const ShowFullImage = ({ image }) => {
  return (
    <div className="fixed z-[999] w-full h-full top-0 left-0 bg-black bg-opacity-80 flex justify-center align-middle">
      <div className="w-auto flex align-middle justify-center">
        <AdvancedImage cldImg={cld.image(image)} />
      </div>
    </div>
  );
};

export default function Carousel({ gallery }: CarouselProps) {
  const resetImage = { image: '', index: 0 };
  const [imageSelected, setImageSelected] = useState(resetImage);

  useKeypress('Escape', () => {
    setImageSelected(resetImage);
  });

  useKeypress(
    'ArrowRight',
    ({ image }: imgState) => {
      if (image)
        setImageSelected((imageSel: imgState) => {
          const newInd = Math.min(gallery.length - 1, imageSel.index + 1);
          return { image: gallery[newInd], index: newInd };
        });
    },
    imageSelected
  );

  useKeypress(
    'ArrowLeft',
    ({ image }: imgState) => {
      if (image)
        setImageSelected((imageSel: imgState) => {
          const newInd = Math.max(0, imageSel.index - 1);
          return { image: gallery[newInd], index: newInd };
        });
    },
    imageSelected
  );

  return (
    <>
      <div className="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">
        {gallery.map((slide, index) => (
          <div
            key={slide}
            onClick={() => {
              setImageSelected({ image: slide, index: index });
            }}
          >
            <AdvancedImage cldImg={cld.image(slide)} />
          </div>
        ))}
      </div>
      {imageSelected.image && <ShowFullImage image={imageSelected.image} />}
    </>
  );
}
