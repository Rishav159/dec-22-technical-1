import { TextComponent } from '@/types/components';

interface TextRendererProps {
  component: TextComponent;
}

export const TextRenderer = ({ component }: TextRendererProps) => {
  const { text, styling } = component.props;

  return (
    <p
      style={{
        fontSize: styling.fontSize,
        color: styling.color,
        fontWeight: styling.fontWeight,
        textAlign: styling.textAlign as 'left' | 'center' | 'right',
        margin: styling.margin,
        padding: styling.padding,
      }}
    >
      {text}
    </p>
  );
};
