import { Component, ComponentType } from '@/types/components';

interface ComponentListProps {
  components: Component[];
  onSelectComponent: (id: string) => void;
  onDeleteComponent: (id: string) => void;
  onAddComponent: (type: ComponentType) => void;
}

export const ComponentList = ({
  components,
  onSelectComponent,
  onDeleteComponent,
  onAddComponent,
}: ComponentListProps) => {
  const getComponentLabel = (component: Component): string => {
    switch (component.type) {
      case 'text':
        return `Text: ${component.props.text.substring(0, 30)}${component.props.text.length > 30 ? '...' : ''}`;
      case 'button':
        return `Button: ${component.props.text}`;
      case 'image':
        return `Image: ${component.props.alt || 'No alt text'}`;
    }
  };

  const getComponentIcon = (type: ComponentType): string => {
    switch (type) {
      case 'text':
        return '📝';
      case 'button':
        return '🔘';
      case 'image':
        return '🖼️';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Components</h2>

        <div className="space-y-2">
          <p className="text-sm text-gray-600 mb-2">Add Component:</p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onAddComponent('text')}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              {getComponentIcon('text')} Text
            </button>
            <button
              onClick={() => onAddComponent('button')}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              {getComponentIcon('button')} Button
            </button>
            <button
              onClick={() => onAddComponent('image')}
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              {getComponentIcon('image')} Image
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {components.length === 0 ? (
          <p className="text-gray-400 text-sm text-center mt-8">
            No components yet. Click a button above to add one.
          </p>
        ) : (
          <div className="space-y-2">
            {components.map((component) => (
              <div
                key={component.id}
                className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <button
                    onClick={() => onSelectComponent(component.id)}
                    className="flex-1 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getComponentIcon(component.type)}</span>
                      <span className="text-sm font-medium text-gray-700">
                        {getComponentLabel(component)}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 ml-7">
                      Alignment: {component.container.alignment}
                    </div>
                  </button>
                  <button
                    onClick={() => onDeleteComponent(component.id)}
                    className="ml-2 px-2 py-1 text-red-600 hover:bg-red-50 rounded text-sm"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
