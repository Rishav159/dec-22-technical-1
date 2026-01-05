interface StyleInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  units?: string[];
}

export const StyleInput = ({ label, value, onChange, units }: StyleInputProps) => {
  // Extract numeric value and unit from the value string
  const extractValueAndUnit = (val: string): { value: string; unit: string } => {
    if (!units || units.length === 0) {
      return { value: val, unit: '' };
    }

    const match = val.match(/^([\d.]+)(.*)$/);
    if (match) {
      return { value: match[1], unit: match[2] || units[0] };
    }
    return { value: '', unit: units[0] };
  };

  const { value: numericValue, unit } = extractValueAndUnit(value);

  const handleValueChange = (newValue: string) => {
    if (units && units.length > 0) {
      onChange(`${newValue}${unit}`);
    } else {
      onChange(newValue);
    }
  };

  const handleUnitChange = (newUnit: string) => {
    onChange(`${numericValue}${newUnit}`);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={units ? numericValue : value}
          onChange={(e) => handleValueChange(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {units && units.length > 0 && (
          <select
            value={unit}
            onChange={(e) => handleUnitChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};
