import { ButtonComponent } from '@/types/components';

interface ButtonRendererProps {
  component: ButtonComponent;
}

export const ButtonRenderer = ({ component }: ButtonRendererProps) => {
  const { text, styling } = component.props;

  return (
    <button
      style={{
        backgroundColor: styling.backgroundColor,
        color: styling.color,
        borderRadius: styling.borderRadius,
        padding: styling.padding,
        fontSize: styling.fontSize,
        fontWeight: styling.fontWeight,
        border: styling.border,
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
};
