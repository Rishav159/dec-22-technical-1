# Interviewee Instructions

## Finding Your Tasks

All sections that require your implementation are marked with comments containing `INTERVIEWEE TODO`. You can search for this exact string using Ctrl+F (or Cmd+F on Mac) in your code editor.

## Main Task Location

**Primary File: `app/page.tsx`**

This is where you'll implement the state management solution. The file currently uses basic React `useState` as a placeholder implementation.

### What to Search For

Search for: **`INTERVIEWEE TODO`**

You'll find three clearly marked sections in `app/page.tsx`:

1. **State Management Section** (Lines ~13-28)
   - Choose your state management library
   - Implement proper state architecture
   - Set up actions/methods for component management

2. **Replace State Management** (Lines ~88-92)
   - Replace the basic useState implementation
   - Set up your chosen library's store/provider/context

3. **Implement Handlers** (Lines ~94-100)
   - Implement handler methods using your state management solution
   - Methods needed:
     - `handleAddComponent` - Add new components
     - `handleUpdateComponent` - Update existing components
     - `handleDeleteComponent` - Delete components
     - `handleSelectComponent` - Select component for editing
     - `handleDeselectComponent` - Deselect component

## Your Task

### 1. Choose a State Management Library

Pick one of:
- Redux (with Redux Toolkit)
- Zustand
- React Context API
- Jotai
- MobX
- Or another solution of your choice

### 2. Set Up Your State Management

Install your chosen library:
```bash
npm install [your-library]
```

### 3. Implement State Management

Replace the placeholder implementation in `app/page.tsx` with your solution. Ensure:
- State persists across component re-renders
- Updates in the sidebar reflect in the preview
- Updates in the editor reflect in both sidebar list and preview
- Component selection works correctly
- Add, update, and delete operations work smoothly

### 4. Test Your Implementation

Make sure all these features work:
- ✅ Adding new components (text, button, image)
- ✅ Clicking a component in the list opens the editor
- ✅ Editing component properties updates the preview in real-time
- ✅ Editing styling properties updates the preview in real-time
- ✅ Changing container alignment updates the preview
- ✅ Deleting components removes them from both list and preview
- ✅ Back button returns to component list
- ✅ All updates are synchronized between sidebar and preview

## What You Don't Need to Change

The following are already implemented and should **not** be modified:
- All UI components in `components/`
- TypeScript types in `types/`
- Styling (Tailwind CSS)
- Form inputs and editors
- Preview rendering logic
- Component wrapper and alignment logic

## Tips

- Start by reading through the existing code to understand the data flow
- The `Component` type in `types/components.ts` defines the data structure
- The `createDefaultComponent` function shows how to create new components
- Focus on clean, maintainable state management patterns
- Consider how your solution would scale with more component types

## Questions to Consider

As you implement, think about:
- How would you add undo/redo functionality?
- How would you persist state to localStorage?
- How would you handle optimistic updates?
- How would you structure state for better performance with many components?

Good luck!
