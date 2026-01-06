import { ImageComponent } from '@/types/components';

interface ImageEditorProps {
  component: ImageComponent;
  onUpdate: (component: ImageComponent) => void;
}

// =============================================================================
// INTERVIEWEE TODO: Implement the ImageEditor component
// =============================================================================
// This editor should allow editing all properties of an image component:
//
// 1. Image URL (text input)
// 2. Alt text (text input)
// 3. Container alignment (dropdown: left, center, right)
// 4. Styling properties:
//    - width (input + unit selector: px, %, rem, em)
//    - height (input + unit selector: px, %, rem, em)
//    - borderRadius (input + unit selector: px, rem, em, %)
//    - objectFit (dropdown: cover, contain, fill, none, scale-down)
//
// Requirements:
// - Reuse the form input components you created for TextEditor and ButtonEditor
// - All inputs should be controlled components
// - Call onUpdate with the complete updated component when values change
// - Proper TypeScript types (no 'any' types allowed)
// =============================================================================

export const ImageEditor = ({ component, onUpdate }: ImageEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">
          🖼️ INTERVIEWEE TODO
        </h3>
        <p className="text-sm text-yellow-800 mb-4">
          Implement the ImageEditor component with form inputs for all image properties.
        </p>
        <div className="bg-white rounded p-4 text-xs">
          <p className="font-semibold mb-2">Current component data:</p>
          <pre className="overflow-auto">{JSON.stringify(component, null, 2)}</pre>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-2">
        <p className="font-semibold">Properties to implement:</p>
        <ul className="list-disc list-inside space-y-1 text-xs ml-2">
          <li>Image URL (text input)</li>
          <li>Alt text (text input)</li>
          <li>Container alignment (dropdown)</li>
          <li>Width with unit selector</li>
          <li>Height with unit selector</li>
          <li>Border radius with unit selector</li>
          <li>Object fit (dropdown)</li>
        </ul>
      </div>
    </div>
  );
};
