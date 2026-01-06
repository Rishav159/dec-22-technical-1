# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is a technical assessment repository designed to test full-stack engineers' ability to build reusable React components and handle form state properly. Candidates will implement component editors for a visual site builder that edits JSON and renders it as a live preview.

## Technical Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Node.js Version**: 22.18.0 (managed via `.tool-versions`)

## Assessment Focus

**What candidates WILL implement:**
- Reusable form input components (StyleInput, ColorInput, SelectInput, TextInput)
- Three component editors (TextEditor, ButtonEditor, ImageEditor)
- Proper handling of controlled components
- Value + unit splitting for style properties (e.g., "16px" → "16" + "px")
- TypeScript types without using `any`
- Scalable component architecture

**What is ALREADY PROVIDED in the skeleton:**
- State management using React useState in `app/page.tsx`
- All UI layout (sidebar, preview area)
- Component list with add/delete functionality
- Tailwind CSS styling
- JSON structure/schema definition for components
- Preview renderer that converts JSON to React components
- Component selection and navigation logic
- Next.js project setup with TypeScript and Tailwind configured

**What candidates should NOT focus on:**
- State management architecture (already implemented with useState)
- UX/UI design (already provided with Tailwind)
- Component rendering logic (already provided)
- Navigation between views (already provided)

## Architecture Overview

The site builder consists of two main panels:

1. **Sidebar (Two Views)**:
   - **Component List View**: Displays all components. Clicking a component navigates to editor. Buttons to add new components. ✅ PROVIDED
   - **Component Editor View**: Form to edit a single component's properties. ⚠️ NEEDS IMPLEMENTATION

2. **Live Preview Panel**: Always visible. Renders the JSON as actual React components in real-time. ✅ PROVIDED

The challenge is building the editor forms that properly update component state via callbacks.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

## Component Types

The site builder supports exactly **three component types**. Each component has a `container` property that controls alignment within a full-width container.

### 1. Text Component
Properties candidates must create editors for:
- `text`: string (content to display) - textarea input
- `container.alignment`: "left" | "center" | "right" - dropdown
- `styling`: object with CSS properties:
  - `fontSize`: string (e.g., "16px", "1rem") - input + unit selector
  - `color`: string (e.g., "#000000") - color picker
  - `fontWeight`: string (e.g., "normal", "bold", "600") - dropdown
  - `textAlign`: string (e.g., "left", "center", "right") - dropdown
  - `margin`: string (e.g., "8px", "1rem") - input + unit selector
  - `padding`: string (e.g., "8px", "1rem") - input + unit selector

### 2. Button Component
Properties candidates must create editors for:
- `text`: string (button label) - text input
- `container.alignment`: "left" | "center" | "right" - dropdown
- `styling`: object with CSS properties:
  - `backgroundColor`: string (e.g., "#3b82f6") - color picker
  - `color`: string (text color, e.g., "#ffffff") - color picker
  - `borderRadius`: string (e.g., "8px", "0.5rem") - input + unit selector
  - `padding`: string (e.g., "12px", "0.75rem") - input + unit selector
  - `fontSize`: string (e.g., "16px", "1rem") - input + unit selector
  - `fontWeight`: string (e.g., "normal", "bold", "600") - dropdown
  - `border`: string (e.g., "1px solid #000000", "none") - text input

### 3. Image Component
Properties candidates must create editors for:
- `src`: string (image URL) - text input
- `alt`: string (alt text) - text input
- `container.alignment`: "left" | "center" | "right" - dropdown
- `styling`: object with CSS properties:
  - `width`: string (e.g., "200px", "100%") - input + unit selector
  - `height`: string (e.g., "auto", "200px") - input + unit selector
  - `borderRadius`: string (e.g., "8px", "50%") - input + unit selector
  - `objectFit`: string (e.g., "cover", "contain", "fill") - dropdown

### Container Property (All Components)
- `container`: object
  - `alignment`: string (e.g., "left", "center", "right")

Each component is wrapped in a container that takes full page width and aligns the component within based on the alignment value.

## JSON Structure

Example of the complete page JSON structure:

```json
{
  "components": [
    {
      "id": "text-1",
      "type": "text",
      "container": {
        "alignment": "center"
      },
      "props": {
        "text": "Welcome to my site",
        "styling": {
          "fontSize": "32px",
          "color": "#000000",
          "fontWeight": "bold",
          "textAlign": "center",
          "margin": "16px",
          "padding": "0px"
        }
      }
    }
  ]
}
```

## Implementation Requirements

### Form Input Components to Create

Candidates should create these in `components/sidebar/form/`:

1. **StyleInput** - For properties with units
   - Props: label, value, onChange, units array
   - Splits "16px" into value (16) and unit (px)
   - Displays: numeric input + unit dropdown
   - Combines back to "16px" when calling onChange

2. **ColorInput** - For color properties
   - Props: label, value, onChange
   - Displays: color picker + hex text input
   - Both inputs stay in sync

3. **SelectInput** - For dropdowns
   - Props: label, value, onChange, options array
   - Generic dropdown component

4. **TextInput** - For text fields
   - Props: label, value, onChange, optional multiline flag
   - Displays: input or textarea

### Component Editors to Implement

In `components/sidebar/editors/`:

1. **TextEditor.tsx** - Edit text component properties
2. **ButtonEditor.tsx** - Edit button component properties
3. **ImageEditor.tsx** - Edit image component properties

Each editor receives:
- `component` - The component to edit
- `onUpdate` - Callback that expects the full updated component

Each editor must:
- Use the reusable form components
- Handle all properties for that component type
- Call `onUpdate` with the complete updated component object
- Be properly typed with TypeScript (no `any` types)

## Key Implementation Details

### Value + Unit Handling

Style properties like "16px" need special handling:
```typescript
// Split for editing
const extractValueAndUnit = (val: string) => {
  const match = val.match(/^([\d.]+)(.*)$/);
  return match ? { value: match[1], unit: match[2] } : { value: '', unit: 'px' };
};

// Combine when saving
const combinedValue = `${numericValue}${unit}`;
```

### State Updates

Must call onUpdate with complete component:
```typescript
const updateStyling = (key: string, value: string) => {
  onUpdate({
    ...component,
    props: {
      ...component.props,
      styling: { ...component.props.styling, [key]: value }
    }
  });
};
```

## Evaluation Criteria

Candidates are evaluated on:
1. **Component Reusability** - Did they create generic form components or repeat code?
2. **TypeScript** - Proper typing without `any`
3. **React Patterns** - Controlled components, immutable updates
4. **Code Quality** - Clean, readable, maintainable
5. **Scalability** - Would their solution work well with 10+ component types?
6. **Functionality** - Does everything work correctly?

## Current State

**Working (provided):**
- ✅ Adding new components
- ✅ Deleting components
- ✅ Selecting components (opens editor view)
- ✅ Navigation back to list
- ✅ Preview rendering

**Not working (to implement):**
- ❌ Editing component properties
- ❌ Form inputs for all properties
- ❌ Real-time preview updates when editing
