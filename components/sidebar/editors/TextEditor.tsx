import { TextComponent, Alignment } from '@/types/components';
import { TextInput } from '../form/TextInput';
import { ColorInput } from '../form/ColorInput';
import { StyleInput } from '../form/StyleInput';
import { SelectInput } from '../form/SelectInput';

interface TextEditorProps {
  component: TextComponent;
  onUpdate: (component: TextComponent) => void;
}

export const TextEditor = ({ component, onUpdate }: TextEditorProps) => {
  const updateText = (text: string) => {
    onUpdate({
      ...component,
      props: {
        ...component.props,
        text,
      },
    });
  };

  const updateStyling = (key: keyof TextComponent['props']['styling'], value: string) => {
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
        label="Text Content"
        value={component.props.text}
        onChange={updateText}
        multiline
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

        <StyleInput
          label="Font Size"
          value={component.props.styling.fontSize}
          onChange={(value) => updateStyling('fontSize', value)}
          units={['px', 'rem', 'em']}
        />

        <ColorInput
          label="Text Color"
          value={component.props.styling.color}
          onChange={(value) => updateStyling('color', value)}
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

        <SelectInput
          label="Text Align"
          value={component.props.styling.textAlign}
          onChange={(value) => updateStyling('textAlign', value)}
          options={[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' },
          ]}
        />

        <StyleInput
          label="Margin"
          value={component.props.styling.margin}
          onChange={(value) => updateStyling('margin', value)}
          units={['px', 'rem', 'em']}
        />

        <StyleInput
          label="Padding"
          value={component.props.styling.padding}
          onChange={(value) => updateStyling('padding', value)}
          units={['px', 'rem', 'em']}
        />
      </div>
    </div>
  );
};
