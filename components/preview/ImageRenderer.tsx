import { ImageComponent } from '@/types/components';
import Image from 'next/image';

interface ImageRendererProps {
  component: ImageComponent;
}

export const ImageRenderer = ({ component }: ImageRendererProps) => {
  const { src, alt, styling } = component.props;

  return (
    <div
      style={{
        width: styling.width,
        height: styling.height,
        borderRadius: styling.borderRadius,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Using regular img tag for simplicity, as Next.js Image requires specific configuration */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: styling.objectFit as 'cover' | 'contain' | 'fill',
        }}
      />
    </div>
  );
};
