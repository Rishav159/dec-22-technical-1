import { ImageComponent, Alignment } from '@/types/components';
import { TextInput } from '../form/TextInput';
import { StyleInput } from '../form/StyleInput';
import { SelectInput } from '../form/SelectInput';

interface ImageEditorProps {
  component: ImageComponent;
  onUpdate: (component: ImageComponent) => void;
}

export const ImageEditor = ({ component, onUpdate }: ImageEditorProps) => {
  const updateProp = (key: 'src' | 'alt', value: string) => {
    onUpdate({
      ...component,
      props: {
        ...component.props,
        [key]: value,
      },
    });
  };

  const updateStyling = (key: keyof ImageComponent['props']['styling'], value: string) => {
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
        label="Image URL"
        value={component.props.src}
        onChange={(value) => updateProp('src', value)}
      />

      <TextInput
        label="Alt Text"
        value={component.props.alt}
        onChange={(value) => updateProp('alt', value)}
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
          label="Width"
          value={component.props.styling.width}
          onChange={(value) => updateStyling('width', value)}
          units={['px', '%', 'rem', 'em']}
        />

        <StyleInput
          label="Height"
          value={component.props.styling.height}
          onChange={(value) => updateStyling('height', value)}
          units={['px', '%', 'rem', 'em']}
        />

        <StyleInput
          label="Border Radius"
          value={component.props.styling.borderRadius}
          onChange={(value) => updateStyling('borderRadius', value)}
          units={['px', 'rem', 'em', '%']}
        />

        <SelectInput
          label="Object Fit"
          value={component.props.styling.objectFit}
          onChange={(value) => updateStyling('objectFit', value)}
          options={[
            { value: 'cover', label: 'Cover' },
            { value: 'contain', label: 'Contain' },
            { value: 'fill', label: 'Fill' },
            { value: 'none', label: 'None' },
            { value: 'scale-down', label: 'Scale Down' },
          ]}
        />
      </div>
    </div>
  );
};
