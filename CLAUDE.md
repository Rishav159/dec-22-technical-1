# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is a technical assessment repository designed to test full-stack engineers' familiarity with React state management. Candidates will implement state management for a visual site builder that edits JSON and renders it as a live preview.

## Technical Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Node.js Version**: 22.18.0 (managed via `.tool-versions`)

## Assessment Focus

**What candidates WILL implement:**
- State management solution (Redux, React Context, Zustand, or other library of their choice)
- Logic to add, edit, and remove components from the JSON structure
- State synchronization between the sidebar and the preview area
- Navigation between component list view and component editor view in the sidebar

**What should be PROVIDED in the skeleton:**
- All UI components and layout (sidebar, preview area, component controls)
- Tailwind CSS styling for all elements
- JSON structure/schema definition for the three component types
- Preview renderer that converts JSON to React components with container wrappers
- Component editor forms with style property inputs (including unit selectors and alignment controls)
- Next.js project setup with TypeScript and Tailwind configured

**What candidates should NOT focus on:**
- UX/UI design (already provided)
- CSS/styling (handled by Tailwind)
- Component rendering logic (already provided)

## Architecture Overview

The site builder consists of two main panels:

1. **Sidebar (Two Views)**:
   - **Component List View**: Displays all components in the page. Clicking a component navigates to the editor. Button to add new components.
   - **Component Editor View**: Form to edit a single component's properties, container alignment, and styling options. Includes back navigation to list view.

2. **Live Preview Panel**: Always visible. Renders the JSON as actual React components in real-time. Each component is wrapped in a full-width container that controls alignment.

The core challenge is managing the state flow between the sidebar views and the live preview.

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
Properties:
- `text`: string (content to display)
- `styling`: object with CSS properties
  - `fontSize`: string (e.g., "16px", "1rem")
  - `color`: string (e.g., "#000000")
  - `fontWeight`: string (e.g., "normal", "bold", "600")
  - `textAlign`: string (e.g., "left", "center", "right")
  - `margin`: string (e.g., "8px", "1rem")
  - `padding`: string (e.g., "8px", "1rem")

### 2. Button Component
Properties:
- `text`: string (button label)
- `styling`: object with CSS properties
  - `backgroundColor`: string (e.g., "#3b82f6")
  - `color`: string (text color, e.g., "#ffffff")
  - `borderRadius`: string (e.g., "8px", "0.5rem")
  - `padding`: string (e.g., "12px", "0.75rem")
  - `fontSize`: string (e.g., "16px", "1rem")
  - `fontWeight`: string (e.g., "normal", "bold", "600")
  - `border`: string (e.g., "1px solid #000000", "none")

### 3. Image Component
Properties:
- `src`: string (image URL)
- `alt`: string (alt text)
- `styling`: object with CSS properties
  - `width`: string (e.g., "200px", "100%")
  - `height`: string (e.g., "auto", "200px")
  - `borderRadius`: string (e.g., "8px", "50%")
  - `objectFit`: string (e.g., "cover", "contain", "fill")

### Container Property (All Components)
- `container`: object
  - `alignment`: string (e.g., "left", "center", "right")

Each component is wrapped in a container that:
- Takes full page width (100%)
- Aligns the component within based on the `alignment` value
- Default alignment is "left" if not specified

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
    },
    {
      "id": "button-1",
      "type": "button",
      "container": {
        "alignment": "center"
      },
      "props": {
        "text": "Click me",
        "styling": {
          "backgroundColor": "#3b82f6",
          "color": "#ffffff",
          "borderRadius": "8px",
          "padding": "12px",
          "fontSize": "16px",
          "fontWeight": "600",
          "border": "none"
        }
      }
    },
    {
      "id": "image-1",
      "type": "image",
      "container": {
        "alignment": "left"
      },
      "props": {
        "src": "https://via.placeholder.com/400",
        "alt": "Placeholder image",
        "styling": {
          "width": "400px",
          "height": "auto",
          "borderRadius": "8px",
          "objectFit": "cover"
        }
      }
    }
  ]
}
```

## Component Editor Input Types

The component editor should provide appropriate inputs for each property type:

**For container alignment**:
- Dropdown/radio buttons with options: `left`, `center`, `right`

**For properties with units** (fontSize, margin, padding, width, height, borderRadius):
- A numeric/text input field for the value
- A unit selector (split button or dropdown) with options: `px`, `rem`, `em`, `%`
- The combined value + unit is stored in the JSON (e.g., "8px", "2rem")

**For color properties** (color, backgroundColor):
- Color picker input
- Stores hex color codes (e.g., "#3b82f6")

**For dropdown properties** (fontWeight, textAlign, objectFit):
- Dropdown/select input with predefined options

**For text properties** (text, src, alt):
- Text input field

## Key Implementation Notes

- The state should support adding new components (user selects from text/button/image types)
- Components should be removable from the list view (delete button per component)
- Clicking a component in the list navigates to its editor
- The editor should have a back button to return to the list view
- The live preview should update in real-time as component properties change
- All styling values in JSON should include their units (e.g., "16px", not just "16")
- Each component needs a unique ID (generate when adding new components)
- Container alignment should be visually reflected in the preview (component aligned left/center/right within full-width container)
