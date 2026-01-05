import { Component } from '@/types/components';
import { TextEditor } from './editors/TextEditor';
import { ButtonEditor } from './editors/ButtonEditor';
import { ImageEditor } from './editors/ImageEditor';
import { isTextComponent, isButtonComponent, isImageComponent } from '@/types/components';

interface ComponentEditorProps {
  component: Component;
  onUpdate: (component: Component) => void;
  onBack: () => void;
}

export const ComponentEditor = ({ component, onUpdate, onBack }: ComponentEditorProps) => {
  const getComponentTypeName = (): string => {
    switch (component.type) {
      case 'text':
        return 'Text';
      case 'button':
        return 'Button';
      case 'image':
        return 'Image';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-3"
        >
          <span>←</span>
          <span>Back to List</span>
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          Edit {getComponentTypeName()} Component
        </h2>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {isTextComponent(component) && (
          <TextEditor component={component} onUpdate={onUpdate} />
        )}
        {isButtonComponent(component) && (
          <ButtonEditor component={component} onUpdate={onUpdate} />
        )}
        {isImageComponent(component) && (
          <ImageEditor component={component} onUpdate={onUpdate} />
        )}
      </div>
    </div>
  );
};
