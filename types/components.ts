import { CSSProperties } from 'react';

// Component type definitions for the site builder

export type ComponentType = 'text' | 'button' | 'image';

export type Alignment = 'left' | 'center' | 'right';

export interface Container {
  alignment: Alignment;
}

// Styling interfaces for each component type
// Using React CSSProperties for proper type compatibility with inline styles
export interface TextStyling {
  fontSize: string;
  color: string;
  fontWeight: string;
  textAlign: CSSProperties['textAlign'];
  margin: string;
  padding: string;
}

export interface ButtonStyling {
  backgroundColor: string;
  color: string;
  borderRadius: string;
  padding: string;
  fontSize: string;
  fontWeight: string;
  border: string;
  margin: string;
  textAlign: CSSProperties['textAlign'];
}

export interface ImageStyling {
  width: string;
  height: string;
  borderRadius: string;
  objectFit: CSSProperties['objectFit'];
}

// Component props interfaces
export interface TextProps {
  text: string;
  styling: TextStyling;
}

export interface ButtonProps {
  text: string;
  styling: ButtonStyling;
}

export interface ImageProps {
  src: string;
  alt: string;
  styling: ImageStyling;
}

// Base component interface
export interface BaseComponent {
  id: string;
  container: Container;
}

export interface TextComponent extends BaseComponent {
  type: 'text';
  props: TextProps;
}

export interface ButtonComponent extends BaseComponent {
  type: 'button';
  props: ButtonProps;
}

export interface ImageComponent extends BaseComponent {
  type: 'image';
  props: ImageProps;
}

// Union type for all components
export type Component = TextComponent | ButtonComponent | ImageComponent;

// Page structure
export interface PageData {
  components: Component[];
}

// Type guards
export const isTextComponent = (component: Component): component is TextComponent => {
  return component.type === 'text';
};

export const isButtonComponent = (component: Component): component is ButtonComponent => {
  return component.type === 'button';
};

export const isImageComponent = (component: Component): component is ImageComponent => {
  return component.type === 'image';
};
