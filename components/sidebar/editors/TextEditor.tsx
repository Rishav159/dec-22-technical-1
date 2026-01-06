import { TextComponent } from '@/types/components';

interface TextEditorProps {
  component: TextComponent;
  onUpdate: (component: TextComponent) => void;
}

// =============================================================================
// INTERVIEWEE TODO: Implement the TextEditor component
// =============================================================================
// This editor should allow editing all properties of a text component:
//
// 1. Text content (multiline textarea)
// 2. Container alignment (dropdown: left, center, right)
// 3. Styling properties:
//    - fontSize (input + unit selector: px, rem, em)
//    - color (color picker + hex input)
//    - fontWeight (dropdown: normal, bold, 300-800)
//    - textAlign (dropdown: left, center, right)
//    - margin (input + unit selector: px, rem, em)
//    - padding (input + unit selector: px, rem, em)
//
// Requirements:
// - Create reusable form input components (they'll be used across all editors)
// - All inputs should be controlled components
// - Call onUpdate with the complete updated component when values change
// - Handle value + unit splitting for style properties (e.g., "16px" -> value: "16", unit: "px")
// - Proper TypeScript types (no 'any' types allowed)
// - Consider scalability: if we add 10 more component types, can your inputs be reused?
//
// Tip: Start by creating generic form components like:
//   - StyleInput (for properties with units)
//   - ColorInput (for color properties)
//   - SelectInput (for dropdowns)
//   - TextInput (for text fields)
// =============================================================================

export const TextEditor = ({ component, onUpdate }: TextEditorProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <h3 className="text-lg font-bold text-yellow-900 mb-2">
          📝 INTERVIEWEE TODO
        </h3>
        <p className="text-sm text-yellow-800 mb-4">
          Implement the TextEditor component with form inputs for all text properties.
        </p>
        <div className="bg-white rounded p-4 text-xs">
          <p className="font-semibold mb-2">Current component data:</p>
          <pre className="overflow-auto">{JSON.stringify(component, null, 2)}</pre>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-2">
        <p className="font-semibold">Properties to implement:</p>
        <ul className="list-disc list-inside space-y-1 text-xs ml-2">
          <li>Text content (textarea)</li>
          <li>Container alignment (dropdown)</li>
          <li>Font size with unit selector</li>
          <li>Text color (color picker)</li>
          <li>Font weight (dropdown)</li>
          <li>Text align (dropdown)</li>
          <li>Margin with unit selector</li>
          <li>Padding with unit selector</li>
        </ul>
      </div>
    </div>
  );
};
