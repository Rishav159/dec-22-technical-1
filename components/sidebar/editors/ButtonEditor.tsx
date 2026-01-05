import { ButtonComponent, Alignment } from '@/types/components';
import { TextInput } from '../form/TextInput';
import { ColorInput } from '../form/ColorInput';
import { StyleInput } from '../form/StyleInput';
import { SelectInput } from '../form/SelectInput';

interface ButtonEditorProps {
  component: ButtonComponent;
  onUpdate: (component: ButtonComponent) => void;
}

export const ButtonEditor = ({ component, onUpdate }: ButtonEditorProps) => {
  const updateText = (text: string) => {
    onUpdate({
      ...component,
      props: {
        ...component.props,
        text,
      },
    });
  };

  const updateStyling = (key: keyof ButtonComponent['props']['styling'], value: string) => {
    onUpdate({
      ...component,
      props: {
        ...component.props,
        styling: {
          ...component.props.styling,
          [key]: value,
        },
      },
    });
  };

  const updateAlignment = (alignment: Alignment) => {
    onUpdate({
      ...component,
      container: {
        alignment,
      },
    });
  };

  return (
    <div>
      <TextInput
        label="Button Text"
        value={component.props.text}
        onChange={updateText}
      />

      <SelectInput
        label="Container Alignment"
        value={component.container.alignment}
        onChange={(value) => updateAlignment(value as Alignment)}
        options={[
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ]}
      />

      <div className="border-t border-gray-200 pt-4 mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Styling</h4>

        <ColorInput
          label="Background Color"
          value={component.props.styling.backgroundColor}
          onChange={(value) => updateStyling('backgroundColor', value)}
        />

        <ColorInput
          label="Text Color"
          value={component.props.styling.color}
          onChange={(value) => updateStyling('color', value)}
        />

        <StyleInput
          label="Border Radius"
          value={component.props.styling.borderRadius}
          onChange={(value) => updateStyling('borderRadius', value)}
          units={['px', 'rem', 'em', '%']}
        />

        <StyleInput
          label="Padding"
          value={component.props.styling.padding}
          onChange={(value) => updateStyling('padding', value)}
          units={['px', 'rem', 'em']}
        />

        <StyleInput
          label="Font Size"
          value={component.props.styling.fontSize}
          onChange={(value) => updateStyling('fontSize', value)}
          units={['px', 'rem', 'em']}
        />

        <SelectInput
          label="Font Weight"
          value={component.props.styling.fontWeight}
          onChange={(value) => updateStyling('fontWeight', value)}
          options={[
            { value: 'normal', label: 'Normal' },
            { value: 'bold', label: 'Bold' },
            { value: '300', label: 'Light (300)' },
            { value: '400', label: 'Regular (400)' },
            { value: '500', label: 'Medium (500)' },
            { value: '600', label: 'Semi-bold (600)' },
            { value: '700', label: 'Bold (700)' },
            { value: '800', label: 'Extra-bold (800)' },
          ]}
        />

        <TextInput
          label="Border (e.g., '1px solid #000' or 'none')"
          value={component.props.styling.border}
          onChange={(value) => updateStyling('border', value)}
        />
      </div>
    </div>
  );
};
