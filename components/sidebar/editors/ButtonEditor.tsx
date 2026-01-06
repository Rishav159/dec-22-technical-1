import { ButtonComponent } from '@/types/components';

interface ButtonEditorProps {
  component: ButtonComponent;
  onUpdate: (component: ButtonComponent) => void;
}

// =============================================================================
// INTERVIEWEE TODO: Implement the ButtonEditor component
// =============================================================================
// This editor should allow editing all properties of a button component:
//
// 1. Button text (text input)
// 2. Container alignment (dropdown: left, center, right)
// 3. Styling properties:
//    - backgroundColor (color picker + hex input)
//    - color (color picker + hex input)
//    - borderRadius (input + unit selector: px, rem, em, %)
//    - padding (input + unit selector: px, rem, em)
//    - fontSize (input + unit selector: px, rem, em)
//    - fontWeight (dropdown: normal, bold, 300-800)
//    - border (text input for full border value like "1px solid #000" or "none")
//
// Requirements:
// - Reuse the form input components you created for TextEditor
// - All inputs should be controlled components
// - Call onUpdate with the complete updated component when values change
// - Proper TypeScript types (no 'any' types allowed)
// =============================================================================

export const ButtonEditor = ({ component, onUpdate }: ButtonEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">
          🔘 INTERVIEWEE TODO
        </h3>
        <p className="text-sm text-yellow-800 mb-4">
          Implement the ButtonEditor component with form inputs for all button properties.
        </p>
        <div className="bg-white rounded p-4 text-xs">
          <p className="font-semibold mb-2">Current component data:</p>
          <pre className="overflow-auto">{JSON.stringify(component, null, 2)}</pre>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-2">
        <p className="font-semibold">Properties to implement:</p>
        <ul className="list-disc list-inside space-y-1 text-xs ml-2">
          <li>Button text (text input)</li>
          <li>Container alignment (dropdown)</li>
          <li>Background color (color picker)</li>
          <li>Text color (color picker)</li>
          <li>Border radius with unit selector</li>
          <li>Padding with unit selector</li>
          <li>Font size with unit selector</li>
          <li>Font weight (dropdown)</li>
          <li>Border (text input)</li>
        </ul>
      </div>
    </div>
  );
};
