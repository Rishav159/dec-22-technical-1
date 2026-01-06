# Site Builder Technical Assessment

A React-based site builder application for testing component architecture and form handling skills.

## Overview

This is a technical assessment project where candidates implement component editors for a visual site builder. The builder allows users to add, edit, and remove components (text, buttons, images) and see a live preview of their changes.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Getting Started

### Prerequisites

- Node.js 22.18.0 (specified in `.tool-versions`)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page with state management
├── components/
│   ├── preview/             # Preview panel components (PROVIDED)
│   │   ├── ButtonRenderer.tsx
│   │   ├── ComponentWrapper.tsx
│   │   ├── ImageRenderer.tsx
│   │   ├── PreviewPanel.tsx
│   │   └── TextRenderer.tsx
│   └── sidebar/             # Sidebar components
│       ├── ComponentEditor.tsx   # (PROVIDED)
│       ├── ComponentList.tsx     # (PROVIDED)
│       ├── Sidebar.tsx           # (PROVIDED)
│       └── editors/              # ⚠️ IMPLEMENT THESE
│           ├── ButtonEditor.tsx
│           ├── ImageEditor.tsx
│           └── TextEditor.tsx
└── types/
    └── components.ts        # TypeScript type definitions (PROVIDED)
```

## Assessment Task

### What You Need To Implement

**Search for: `INTERVIEWEE TODO`** in the codebase to find all sections that need implementation.

**Your Task:** Implement the three component editors in `components/sidebar/editors/`:
1. `TextEditor.tsx` - Edit text component properties
2. `ButtonEditor.tsx` - Edit button component properties
3. `ImageEditor.tsx` - Edit image component properties

### Key Requirements

1. **Create Reusable Form Input Components**
   - Build generic inputs that can be used across all editors
   - Suggested components:
     - `StyleInput` - For properties with units (e.g., "16px", "2rem")
     - `ColorInput` - For color properties with color picker
     - `SelectInput` - For dropdown selections
     - `TextInput` - For text fields

2. **Handle Value + Unit Splitting**
   - Style properties like "16px" need to be split into value (16) and unit (px)
   - Provide unit selector dropdowns (px, rem, em, %)
   - Combine value + unit when calling `onUpdate`

3. **Proper State Updates**
   - All inputs must be controlled components
   - Call `onUpdate` with the complete updated component object
   - Changes should immediately reflect in the preview panel

4. **TypeScript Requirements**
   - No `any` types allowed
   - Properly type all props and callbacks
   - Use the types from `types/components.ts`

5. **Scalability**
   - Design components that could easily be reused for 10+ more component types
   - Avoid code duplication across editors
   - Think about maintainability

### What's Already Implemented

- ✅ State management in `app/page.tsx`
- ✅ Adding, deleting, and selecting components
- ✅ All preview rendering logic
- ✅ Component wrapper with alignment
- ✅ Sidebar navigation and routing
- ✅ Tailwind CSS styling
- ✅ TypeScript types and interfaces

### Current Functionality

The app currently works for:
- ✅ Adding new components (text, button, image)
- ✅ Viewing components in the sidebar list
- ✅ Deleting components
- ✅ Selecting a component (opens editor view)
- ✅ Navigating back to list view
- ✅ Preview panel displaying components

**Not working yet** (what you'll implement):
- ❌ Editing component properties
- ❌ Updating styling values
- ❌ Changing container alignment
- ❌ Real-time preview updates when editing

## Component Types

### 1. Text Component
Properties to edit:
- `text` - Content (textarea)
- `container.alignment` - left, center, right
- `styling.fontSize` - with unit selector
- `styling.color` - color picker
- `styling.fontWeight` - dropdown
- `styling.textAlign` - left, center, right
- `styling.margin` - with unit selector
- `styling.padding` - with unit selector

### 2. Button Component
Properties to edit:
- `text` - Button label (text input)
- `container.alignment` - left, center, right
- `styling.backgroundColor` - color picker
- `styling.color` - text color, color picker
- `styling.borderRadius` - with unit selector
- `styling.padding` - with unit selector
- `styling.fontSize` - with unit selector
- `styling.fontWeight` - dropdown
- `styling.border` - text input (e.g., "1px solid #000")

### 3. Image Component
Properties to edit:
- `src` - Image URL (text input)
- `alt` - Alt text (text input)
- `container.alignment` - left, center, right
- `styling.width` - with unit selector
- `styling.height` - with unit selector
- `styling.borderRadius` - with unit selector
- `styling.objectFit` - cover, contain, fill, etc.

## Tips

- Start by creating the reusable form input components
- Test with one editor first (TextEditor) before implementing the others
- Use the JSON display in the stub editors to see the data structure
- The `onUpdate` callback expects the complete component object
- Look at `types/components.ts` for the full type definitions
- Use controlled component patterns (value + onChange)
- Consider using helper functions to update nested properties immutably

## Evaluation Criteria

You'll be evaluated on:
- **Component Design** - Are your inputs reusable and well-structured?
- **TypeScript** - Proper typing without `any`
- **React Patterns** - Controlled components, proper state updates
- **Code Quality** - Clean, readable, maintainable code
- **Scalability** - Could your solution handle more component types easily?
- **Functionality** - Does everything work correctly?
