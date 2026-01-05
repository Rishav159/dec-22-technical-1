# Site Builder Technical Assessment

A React-based site builder application for testing state management skills.

## Overview

This is a technical assessment project where candidates implement state management for a visual site builder. The builder allows users to add, edit, and remove components (text, buttons, images) and see a live preview of their changes.

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
│   └── page.tsx             # Main page (STATE MANAGEMENT TODO)
├── components/
│   ├── preview/             # Preview panel components
│   │   ├── ButtonRenderer.tsx
│   │   ├── ComponentWrapper.tsx
│   │   ├── ImageRenderer.tsx
│   │   ├── PreviewPanel.tsx
│   │   └── TextRenderer.tsx
│   └── sidebar/             # Sidebar components
│       ├── ComponentEditor.tsx
│       ├── ComponentList.tsx
│       ├── Sidebar.tsx
│       ├── editors/         # Component-specific editors
│       │   ├── ButtonEditor.tsx
│       │   ├── ImageEditor.tsx
│       │   └── TextEditor.tsx
│       └── form/            # Form input components
│           ├── ColorInput.tsx
│           ├── SelectInput.tsx
│           ├── StyleInput.tsx
│           └── TextInput.tsx
└── types/
    └── components.ts        # TypeScript type definitions
```

## Assessment Task

### What You Need To Implement

Search for `INTERVIEWEE TODO` in the codebase to find sections that need implementation. The main task is in `app/page.tsx`.

**Your Task:**
1. Choose a state management library (Redux, Zustand, React Context, Jotai, or another)
2. Replace the basic `useState` implementation with your chosen solution
3. Implement proper state management for:
   - Components array
   - Selected component ID
   - Adding new components
   - Updating existing components
   - Deleting components
4. Ensure state updates properly synchronize between the sidebar and preview panel

### What's Already Implemented

- All UI components and layouts
- Styling with Tailwind CSS
- TypeScript types and interfaces
- Component rendering logic
- Form inputs with unit selectors
- Preview panel with live updates

## Component Types

The builder supports three component types:

1. **Text Component**
   - Text content
   - Font size, color, weight
   - Text alignment
   - Margin and padding

2. **Button Component**
   - Button text
   - Background and text colors
   - Border radius, padding
   - Font size and weight
   - Border styling

3. **Image Component**
   - Image URL and alt text
   - Width and height
   - Border radius
   - Object fit

Each component also has a container alignment property (left, center, right).

## Tips

- The current implementation uses basic React hooks as a starting point
- All TypeScript types are defined in `types/components.ts`
- The component renderers handle the visual display
- Focus on clean state management patterns
- Consider scalability for adding more component types in the future
