import type { FormField } from '@/config/form.types'

interface FormPreviewProps {
  fields: FormField[];
}

export function FormPreview({ fields }: FormPreviewProps) {
  const renderField = (field: FormField) => {
    const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';
    const labelClasses = 'block text-sm font-medium text-gray-700 mb-1';

    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
      case 'date':
        return (
          <div key={field.id} className="mb-4">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className={baseClasses}
            />
          </div>
        );

      case 'textarea':
        return (
          <div key={field.id} className="mb-4">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
              placeholder={field.placeholder}
              required={field.required}
              rows={4}
              className={baseClasses}
            />
          </div>
        );

      case 'select':
        return (
          <div key={field.id} className="mb-4">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <select required={field.required} className={baseClasses}>
              <option value="">Select an option</option>
              {field.options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case 'radio':
        return (
          <div key={field.id} className="mb-4">
            <label className={labelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="space-y-2 mt-2">
              {field.options?.map((option, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name={field.id}
                    value={option}
                    required={field.required}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.id} className="mb-4">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                required={field.required}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Form Preview</h2>
      {fields.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-8">Add fields to see the preview</p>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-1">
          {fields.map((field) => renderField(field))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium mt-6"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
