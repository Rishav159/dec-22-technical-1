// Describes editable properties for the button and how their form fields should behave
// TODO: Add typescript types.
export const buttonEditorConfig = {
  text: {
    type: 'string',
    default: 'Click me',
    label: 'Text',
    propPath: 'props.text',
  },
  fontSize: {
    type: 'number',
    formatter: (value) => `${value}px`,
    parser: (stored) => {
      const match = stored && stored.match(/^-?\d+(\.\d+)?/);
      const num = match ? Number(match[0]) : NaN;
      return Number.isNaN(num) ? 0 : num;
    },
    default: 16,
    label: 'Font size (px)',
    propPath: 'props.styling.fontSize',
  },
  color: {
    type: 'string',
    default: '#ffffff',
    label: 'Text color',
    propPath: 'props.styling.color',
  },
  fontWeight: {
    type: 'enum',
    options: ['normal', '500', '600', '700', 'bold'],
    default: '600',
    label: 'Font weight',
    propPath: 'props.styling.fontWeight',
  },
  textAlign: {
    type: 'enum',
    options: ['left', 'center', 'right'],
    default: 'center',
    label: 'Text alignment',
    propPath: 'props.styling.textAlign',
  },
  margin: {
    type: 'number',
    formatter: (value) => `${value}px`,
    parser: (stored) => {
      const match = stored && stored.match(/^-?\d+(\.\d+)?/);
      const num = match ? Number(match[0]) : NaN;
      return Number.isNaN(num) ? 0 : num;
    },
    default: 8,
    label: 'Margin (px)',
    propPath: 'props.styling.margin',
  },
  padding: {
    type: 'number',
    formatter: (value) => `${value}px`,
    parser: (stored) => {
      const match = stored && stored.match(/^-?\d+(\.\d+)?/);
      const num = match ? Number(match[0]) : NaN;
      return Number.isNaN(num) ? 0 : num;
    },
    default: 12,
    label: 'Padding (px)',
    propPath: 'props.styling.padding',
  },
  height: {
    type: 'number',
    formatter: (value) => `${value}px`,
    parser: (stored) => {
      const match = stored && stored.match(/^-?\d+(\.\d+)?/);
      const num = match ? Number(match[0]) : NaN;
      return Number.isNaN(num) ? 0 : num;
    },
    default: 40,
    label: 'Height (px)',
    propPath: 'props.styling.height',
  }
};


