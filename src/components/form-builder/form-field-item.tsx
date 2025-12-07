import { Trash2, GripVertical, Plus, X } from 'lucide-react';
import type { FormField } from '@/config/form.types';
import { useState } from 'react';

interface FormFieldItemProps {
  field: FormField;
  onUpdate: (updates: Partial<FormField>) => void;
  onRemove: () => void;
}

export function FormFieldItem({ field, onUpdate, onRemove }: FormFieldItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleAddOption = () => {
    const newOption = `Option ${(field.options?.length || 0) + 1}`;
    onUpdate({ options: [...(field.options || []), newOption] });
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = field.options?.filter((_, i) => i !== index);
    onUpdate({ options: newOptions });
  };

  const handleUpdateOption = (index: number, value: string) => {
    const newOptions = [...(field.options || [])];
    newOptions[index] = value;
    onUpdate({ options: newOptions });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors group">
      <div className="flex items-start gap-3">
        <div className="cursor-move text-gray-400 hover:text-gray-600 mt-1">
          <GripVertical size={20} />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={field.label}
                onChange={(e) => onUpdate({ label: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Field Label"
              />
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                  {field.type}
                </span>
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={field.required || false}
                    onChange={(e) => onUpdate({ required: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Required
                </label>
                <button onClick={() => setIsEditing(!isEditing)} className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  {isEditing ? 'Done' : 'Edit Details'}
                </button>
              </div>
            </div>

            <button
              onClick={onRemove}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors"
              title="Remove field"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {isEditing && (
            <div className="space-y-3 mt-3 pt-3 border-t border-gray-200">
              <input
                type="text"
                value={field.placeholder || ''}
                onChange={(e) => onUpdate({ placeholder: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Placeholder text"
              />

              {(field.type === 'select' || field.type === 'radio') && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Options:</label>
                  {field.options?.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleUpdateOption(index, e.target.value)}
                        className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Option ${index + 1}`}
                      />
                      <button
                        onClick={() => handleRemoveOption(index)}
                        className="text-red-500 hover:text-red-700 p-2"
                        title="Remove option"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={handleAddOption}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Plus size={16} />
                    Add Option
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
