'use client';

import { useState } from 'react';
import { Component, ComponentType } from '@/types/components';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { PreviewPanel } from '@/components/preview/PreviewPanel';

// =============================================================================
// INTERVIEWEE TODO: STATE MANAGEMENT
// =============================================================================
// This is a basic implementation using React's useState. Your task is to:
// 1. Choose a state management library (Redux, Zustand, React Context, or another)
// 2. Implement proper state management for the components array
// 3. Implement actions/methods for:
//    - Adding new components
//    - Updating existing components
//    - Deleting components
//    - Managing selected component ID
// 4. Ensure state updates trigger re-renders in both the Sidebar and PreviewPanel
// 5. Make sure all state changes are properly synchronized
//
// The current implementation below uses basic useState as a placeholder.
// Replace this with your chosen state management solution.
// =============================================================================

const createDefaultComponent = (type: ComponentType, id: string): Component => {
  const baseContainer = { alignment: 'center' as const };

  switch (type) {
    case 'text':
      return {
        id,
        type: 'text',
        container: baseContainer,
        props: {
          text: 'New text component',
          styling: {
            fontSize: '16px',
            color: '#000000',
            fontWeight: 'normal',
            textAlign: 'left',
            margin: '8px',
            padding: '8px',
          },
        },
      };
    case 'button':
      return {
        id,
        type: 'button',
        container: baseContainer,
        props: {
          text: 'Click me',
          styling: {
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '12px',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
          },
        },
      };
    case 'image':
      return {
        id,
        type: 'image',
        container: baseContainer,
        props: {
          src: 'https://via.placeholder.com/400',
          alt: 'Placeholder image',
          styling: {
            width: '400px',
            height: 'auto',
            borderRadius: '8px',
            objectFit: 'cover',
          },
        },
      };
  }
};

export default function Home() {
  // =============================================================================
  // INTERVIEWEE TODO: REPLACE THIS STATE MANAGEMENT
  // =============================================================================
  // Currently using basic React useState. Replace with your chosen solution.
  // =============================================================================
  const [components, setComponents] = useState<Component[]>([]);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

  // =============================================================================
  // INTERVIEWEE TODO: IMPLEMENT THESE HANDLERS
  // =============================================================================
  // These handlers use basic setState. You should implement these using your
  // chosen state management library's methods (actions, reducers, etc.)
  // =============================================================================

  const handleAddComponent = (type: ComponentType) => {
    const id = `${type}-${Date.now()}`;
    const newComponent = createDefaultComponent(type, id);
    setComponents([...components, newComponent]);
  };

  const handleUpdateComponent = (updatedComponent: Component) => {
    setComponents(
      components.map((c) => (c.id === updatedComponent.id ? updatedComponent : c))
    );
  };

  const handleDeleteComponent = (id: string) => {
    setComponents(components.filter((c) => c.id !== id));
    if (selectedComponentId === id) {
      setSelectedComponentId(null);
    }
  };

  const handleSelectComponent = (id: string) => {
    setSelectedComponentId(id);
  };

  const handleDeselectComponent = () => {
    setSelectedComponentId(null);
  };

  // =============================================================================
  // END INTERVIEWEE TODO SECTION
  // =============================================================================

  return (
    <div className="flex h-screen">
      <Sidebar
        components={components}
        selectedComponentId={selectedComponentId}
        onSelectComponent={handleSelectComponent}
        onDeselectComponent={handleDeselectComponent}
        onUpdateComponent={handleUpdateComponent}
        onDeleteComponent={handleDeleteComponent}
        onAddComponent={handleAddComponent}
      />
      <PreviewPanel components={components} />
    </div>
  );
}
