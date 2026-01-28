import { ButtonComponent } from '@/types/components';
import { buttonEditorConfig } from './ButtonFormConfig';

interface ButtonEditorProps {
  component: ButtonComponent;
  onChange: (component: ButtonComponent) => void;
}

const getValueAtPath = (obj: unknown, path: string) => {
  return path.split('.').reduce((acc: any, key) => {
    if (acc == null) return undefined;
    return acc[key];
  }, obj as any);
};

const setValueAtPath = (
  component: ButtonComponent,
  path: string,
  value: unknown
): ButtonComponent => {
  const segments = path.split('.');
  const newComponent: any = { ...component };
  let current: any = newComponent;

  segments.forEach((segment, index) => {
    if (index === segments.length - 1) {
      current[segment] = value;
    } else {
      current[segment] = { ...current[segment] };
      current = current[segment];
    }
  });

  return newComponent;
};

export const ButtonEditor = ({ component, onChange }: ButtonEditorProps) => {

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Button Properties
        </h3>

        <div className="space-y-4">
          {Object.entries(buttonEditorConfig).map(([key, fieldConfig]: any) => {
            const storedValue = getValueAtPath(component, fieldConfig.propPath);

            let inputValue: string | number;
            if (fieldConfig.type === 'number') {
              if (fieldConfig.parser) {
                inputValue = fieldConfig.parser(
                  storedValue ?? fieldConfig.formatter(fieldConfig.default)
                );
              } else {
                inputValue =
                  typeof storedValue === 'number'
                    ? storedValue
                    : fieldConfig.default;
              }
            } else {
              inputValue =
                (storedValue as string | undefined) ?? fieldConfig.default;
            }

            const handleChange = (
              event: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
              >
            ) => {
              const raw = event.target.value;
              let newStored: unknown = raw;

              if (fieldConfig.type === 'number') {
                const numeric = raw === '' ? fieldConfig.default : Number(raw);
                newStored = fieldConfig.formatter
                  ? fieldConfig.formatter(numeric)
                  : numeric;
              }

              const updated = setValueAtPath(component, fieldConfig.propPath, newStored);
              onChange(updated);
            };

            const isTextarea = key === 'text' && fieldConfig.type === 'string';

            return (
              <div key={key} className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  {fieldConfig.label}
                </label>

                {fieldConfig.type === 'enum' && Array.isArray(fieldConfig.options) ? (
                  <select
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={inputValue as string}
                    onChange={handleChange}
                  >
                    {fieldConfig.options.map((option: string) => (
                      <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                ) : isTextarea ? (
                  <textarea
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    value={inputValue as string}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={fieldConfig.type === 'number' ? 'number' : 'text'}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={inputValue as string | number}
                    onChange={handleChange}
                    placeholder={key === 'color' ? '#ffffff' : undefined}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-3 text-xs text-gray-500">
        <p className="font-semibold mb-1">Current component data</p>
        <pre className="overflow-auto max-h-40">
          {JSON.stringify(component, null, 2)}
        </pre>
      </div>
    </div>
  );
};
