import { Component } from '@/types/components';
import { TextRenderer } from './TextRenderer';
import { ButtonRenderer } from './ButtonRenderer';
import { ImageRenderer } from './ImageRenderer';
import { isTextComponent, isButtonComponent, isImageComponent } from '@/types/components';

interface ComponentWrapperProps {
  component: Component;
}

export const ComponentWrapper = ({ component }: ComponentWrapperProps) => {
  const { container } = component;

  const alignmentClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[container.alignment];

  return (
    <div className={`w-full flex ${alignmentClass} py-2`}>
      <div>
        {isTextComponent(component) && <TextRenderer component={component} />}
        {isButtonComponent(component) && <ButtonRenderer component={component} />}
        {isImageComponent(component) && <ImageRenderer component={component} />}
      </div>
    </div>
  );
};
