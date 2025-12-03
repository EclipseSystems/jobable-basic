export type FieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'date';

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  defaultValue?: string;
}

export interface FormSchema {
  fields: FormField[];
}

export interface SavedForm {
  id: string;
  name: string;
  description: string | null;
  schema: FormSchema;
  created_at: string;
  updated_at: string;
  user_id: string;
}
