import { AdvancedImage } from '@cloudinary/react';
import cld from '~/cloudinaryConfig';

interface CarouselProps {
  gallery: Array<string>;
}

export default function Carousel({ gallery }: CarouselProps) {
  return (
    <div className="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">
      {gallery.map((slide) => (
        <div key={slide} onClick={() => alert(slide)}>
          <AdvancedImage cldImg={cld.image(slide)} />
        </div>
      ))}
    </div>
  );
}
