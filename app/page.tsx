'use client';

import { useState } from 'react';
import { Component, ComponentType } from '@/types/components';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { PreviewPanel } from '@/components/preview/PreviewPanel';

// State management for the site builder
// This uses React's useState - it's already implemented and working.

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
            margin: '8px',
            textAlign: 'center',
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
  // Component state and selected component tracking
  const [components, setComponents] = useState<Component[]>([]);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);

  // Handler functions for component operations
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
