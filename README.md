# Site Builder Technical Assessment

A React-based site builder for creating and editing page components with live preview.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Other Commands

```bash
npm run build        # Build for production
npm run type-check   # Run TypeScript type checking
npm run lint         # Run linting
```

## Project Overview

This is a visual site builder that allows users to:
- Add components (text, button, image) to a page
- Edit component properties and styling
- See a live preview of the page

## What's Provided

- State management (React useState)
- Component list sidebar with add/delete functionality
- Live preview panel that renders components
- All UI layouts and styling (Tailwind CSS)
- TypeScript types in `types/components.ts`
- Preview renderers that apply component styles

## What You Need to Implement

The component editors in `components/sidebar/editors/` are not implemented. You need to:

1. **Build the editor forms** that allow editing component properties
2. **Create reusable form input components** for handling different input types

### Components to Edit

**Text Component** (`TextEditor.tsx`)
- Text content
- Container alignment
- Styling: fontSize, color, fontWeight, textAlign, margin, padding

**Button Component** (`ButtonEditor.tsx`)
- Button text
- Container alignment
- Styling: backgroundColor, color, borderRadius, padding, fontSize, fontWeight, border

**Image Component** (`ImageEditor.tsx`)
- Image URL, alt text
- Container alignment
- Styling: width, height, borderRadius, objectFit

## Component Data Structure

Components have this structure:
```typescript
{
  id: string;
  type: 'text' | 'button' | 'image';
  container: {
    alignment: 'left' | 'center' | 'right';
  };
  props: {
    // Component-specific props (text, src, alt, etc.)
    styling: { } // Universal prop on all components to configure styling.
  }
}
```

## Success Criteria

When complete, you should be able to:
- Change any style or property in a component
- See the preview update in real-time
- Style properties include units in the value (e.g., "16px", "2rem", "#ff0000")
