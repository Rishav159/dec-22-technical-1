# Interviewee Instructions

## Finding Your Tasks

All sections that require your implementation are marked with comments containing `INTERVIEWEE TODO`. You can search for this exact string using Ctrl+F (or Cmd+F on Mac) in your code editor.

## Task Overview

**Your goal:** Implement the three component editor files in `components/sidebar/editors/`

The app currently supports adding, deleting, and selecting components, but **editing doesn't work yet**. You need to build the editor forms that allow users to modify component properties.

## What to Search For

Search for: **`INTERVIEWEE TODO`**

You'll find three files that need implementation:

### 1. `components/sidebar/editors/TextEditor.tsx`
Implement form inputs to edit text component properties

### 2. `components/sidebar/editors/ButtonEditor.tsx`
Implement form inputs to edit button component properties

### 3. `components/sidebar/editors/ImageEditor.tsx`
Implement form inputs to edit image component properties

## Step-by-Step Implementation Guide

### Step 1: Create Reusable Form Components

Before implementing the editors, create reusable form input components. We recommend creating these in a new directory: `components/sidebar/form/`

**Suggested components:**

#### `StyleInput.tsx`
For properties with units (e.g., fontSize: "16px")
- Takes: label, value, onChange callback, available units
- Displays: text input for value + dropdown for unit
- Handles: splitting "16px" into "16" and "px", combining on change

#### `ColorInput.tsx`
For color properties
- Takes: label, value, onChange callback
- Displays: color picker input + text input for hex value
- Both inputs should stay in sync

#### `SelectInput.tsx`
For dropdown selections
- Takes: label, value, onChange callback, options array
- Displays: dropdown/select element
- Generic enough to work for all dropdown needs

#### `TextInput.tsx`
For text fields
- Takes: label, value, onChange callback, optional multiline flag
- Displays: input or textarea
- Simple but consistent with other inputs

### Step 2: Implement TextEditor

Start with `TextEditor.tsx`:

```typescript
// Pseudo-code structure:
export const TextEditor = ({ component, onUpdate }) => {
  // Helper function to update text
  const updateText = (text: string) => {
    onUpdate({
      ...component,
      props: { ...component.props, text }
    });
  };

  // Helper function to update styling property
  const updateStyling = (key: string, value: string) => {
    onUpdate({
      ...component,
      props: {
        ...component.props,
        styling: { ...component.props.styling, [key]: value }
      }
    });
  };

  // Helper function to update alignment
  const updateAlignment = (alignment: Alignment) => {
    onUpdate({
      ...component,
      container: { alignment }
    });
  };

  return (
    <div>
      <TextInput label="Text Content" value={...} onChange={updateText} multiline />
      <SelectInput label="Container Alignment" ... />
      <StyleInput label="Font Size" value={...} onChange={...} units={['px','rem','em']} />
      {/* ... more inputs */}
    </div>
  );
};
```

**Properties to implement:**
- Text content (multiline textarea)
- Container alignment (dropdown: left, center, right)
- Font size (with units: px, rem, em)
- Color (color picker)
- Font weight (dropdown: normal, bold, 300-800)
- Text align (dropdown: left, center, right)
- Margin (with units)
- Padding (with units)

### Step 3: Implement ButtonEditor

Reuse your form components from Step 1!

**Properties to implement:**
- Button text
- Container alignment
- Background color (color picker)
- Text color (color picker)
- Border radius (with units: px, rem, em, %)
- Padding (with units)
- Font size (with units)
- Font weight (dropdown)
- Border (text input - full CSS value like "1px solid #000")

### Step 4: Implement ImageEditor

Reuse your form components again!

**Properties to implement:**
- Image URL
- Alt text
- Container alignment
- Width (with units: px, %, rem, em)
- Height (with units: px, %, rem, em)
- Border radius (with units)
- Object fit (dropdown: cover, contain, fill, none, scale-down)

## Key Requirements

### 1. TypeScript - No `any` Types
```typescript
// ❌ BAD
const handleChange = (value: any) => { ... }

// ✅ GOOD
const handleChange = (value: string) => { ... }
```

### 2. Controlled Components
```typescript
// ✅ All inputs should be controlled
<input value={component.props.text} onChange={(e) => updateText(e.target.value)} />
```

### 3. Value + Unit Splitting
```typescript
// Example: "16px" needs to be split for editing
const extractValue = (val: string): { value: string; unit: string } => {
  const match = val.match(/^([\d.]+)(.*)$/);
  return match ? { value: match[1], unit: match[2] } : { value: '', unit: 'px' };
};
```

### 4. Proper State Updates
Always call `onUpdate` with the **complete** component object:
```typescript
// ✅ CORRECT
onUpdate({
  ...component,
  props: {
    ...component.props,
    text: newText
  }
});

// ❌ WRONG - don't mutate
component.props.text = newText;
onUpdate(component);
```

### 5. Reusability
Your form components should be generic enough to:
- Work across all three editors
- Work if we add 10 more component types later
- Be maintained in one place

## Testing Your Implementation

After implementing, test that these work:

1. **Add a text component**
   - Click "Text" button
   - Component appears in list and preview

2. **Edit the text component**
   - Click the component in the list
   - Editor opens with current values pre-filled
   - Change the text → preview updates immediately
   - Change font size → preview updates immediately
   - Change color → preview updates immediately
   - Change alignment → preview updates immediately

3. **Test all three component types**
   - Text, Button, and Image
   - All properties should be editable
   - All changes should reflect in preview in real-time

4. **Navigation**
   - Back button returns to list
   - Can switch between editing different components

5. **Delete**
   - Delete button removes component
   - If editing a component when deleted, returns to list

## Common Pitfalls

### Pitfall 1: Not updating the full component
```typescript
// ❌ This won't work
onUpdate({ text: newText });

// ✅ Must include everything
onUpdate({ ...component, props: { ...component.props, text: newText }});
```

### Pitfall 2: Using `any` types
```typescript
// ❌ Will fail TypeScript check
const handleChange = (e: any) => ...

// ✅ Properly typed
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => ...
```

### Pitfall 3: Not handling units correctly
```typescript
// If fontSize is "16px", you need to:
// 1. Extract "16" and "px" separately for display
// 2. Combine them back to "16px" when calling onUpdate
```

### Pitfall 4: Copy-pasting form inputs
```typescript
// ❌ Don't repeat this in every editor
<input ... /> // fontSize
<select ... /> // unit selector

// ✅ Create a reusable component
<StyleInput label="Font Size" value={...} units={['px','rem','em']} />
```

## Useful Type Definitions

Check `types/components.ts` for all type definitions:
- `Component` - Union of all component types
- `TextComponent`, `ButtonComponent`, `ImageComponent` - Specific types
- `Alignment` - "left" | "center" | "right"
- Individual styling interfaces for each component type

## Questions to Consider

As you implement, think about:
- How would you add a new property to all components?
- How would you add a new component type?
- How would your form components handle validation?
- How could you add undo/redo functionality later?

## Time Estimate

This task should take approximately **45-90 minutes** depending on your experience level:
- 15-30 min: Create reusable form components
- 30-60 min: Implement three editors
- Test and refine

## Getting Help

If you're stuck:
1. Check the JSON preview in the stub editors to see the data structure
2. Look at `types/components.ts` for type definitions
3. Review the preview renderers to understand how data flows
4. Remember: Start with one editor, then reuse for others

Good luck! 🚀
