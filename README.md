# A Simple Site Builder 

A React-based site builder for creating and editing page components with live preview.

## Project Overview

This is a visual site builder that allows users to:
- Add components (text, button, image) to a page
- Edit component properties and styling
- See a live preview of the page

## Instructions

The component editors in `components/sidebar/editors/` are not implemented. You need to:

**Build the editor forms** that allow editing component properties

- **Text Component** (`TextEditor.tsx`)
- **Button Component** (`ButtonEditor.tsx`)
- **Image Component** (`ImageEditor.tsx`)

**To get started** run the project and click around. Come back to the README below afterwards for more details

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Other Commands
npm run build        # Build for production
npm run type-check   # Run TypeScript type checking
npm run lint         # Run linting
```

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

## Don't Worry About...

- Listing the components in the sidebar 
- Component add/delete functionality
- Live preview panel that renders components