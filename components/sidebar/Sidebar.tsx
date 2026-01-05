import { Component, ComponentType } from '@/types/components';
import { ComponentList } from './ComponentList';
import { ComponentEditor } from './ComponentEditor';

interface SidebarProps {
  components: Component[];
  selectedComponentId: string | null;
  onSelectComponent: (id: string) => void;
  onDeselectComponent: () => void;
  onUpdateComponent: (component: Component) => void;
  onDeleteComponent: (id: string) => void;
  onAddComponent: (type: ComponentType) => void;
}

export const Sidebar = ({
  components,
  selectedComponentId,
  onSelectComponent,
  onDeselectComponent,
  onUpdateComponent,
  onDeleteComponent,
  onAddComponent,
}: SidebarProps) => {
  const selectedComponent = components.find((c) => c.id === selectedComponentId);

  return (
    <div className="w-96 bg-gray-50 border-r border-gray-200 h-screen">
      {selectedComponent ? (
        <ComponentEditor
          component={selectedComponent}
          onUpdate={onUpdateComponent}
          onBack={onDeselectComponent}
        />
      ) : (
        <ComponentList
          components={components}
          onSelectComponent={onSelectComponent}
          onDeleteComponent={onDeleteComponent}
          onAddComponent={onAddComponent}
        />
      )}
    </div>
  );
};
