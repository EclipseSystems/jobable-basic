import { Type, Mail, Hash, FileText, ChevronDown, Radio, CheckSquare, Calendar } from 'lucide-react';

interface FieldOption {
  type: FieldType;
  label: string;
  icon: React.ReactNode;
}

export type FieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'date';

const fieldOptions: FieldOption[] = [
  { type: 'text', label: 'Text input', icon: <Type size={18} /> },
  { type: 'email', label: 'Email', icon: <Mail size={18} /> },
  { type: 'number', label: 'Number', icon: <Hash size={18} /> },
  { type: 'textarea', label: 'Text area', icon: <FileText size={18} /> },
  { type: 'select', label: 'Dropdown', icon: <ChevronDown size={18} /> },
  { type: 'radio', label: 'Radio buttons', icon: <Radio size={18} /> },
  { type: 'checkbox', label: 'Checkbox', icon: <CheckSquare size={18} /> },
  { type: 'date', label: 'Date', icon: <Calendar size={18} /> },
];

export function FieldPalette() {
  const handleDragStart = (e: React.DragEvent, type: FieldType) => {
    e.dataTransfer.setData('fieldType', type);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Form fields</h2>
      <div className="space-y-2">
        {fieldOptions.map((field) => (
          <div
            key={field.type}
            draggable
            onDragStart={(e) => handleDragStart(e, field.type)}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-move hover:bg-blue-50 hover:border-blue-300 transition-colors"
          >
            <div className="text-gray-600">{field.icon}</div>
            <span className="text-sm font-medium text-gray-700">{field.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
