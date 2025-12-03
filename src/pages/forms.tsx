import { useState } from "react";

import { PageTitle } from "@/components/pageTitle"

import { FieldPalette } from "@/components/form-builder/field-palette"
import { FormCanvas } from "@/components/form-builder/form-canvas"
import { type FormField } from "@/config/form.types";

import { FormPreview } from "@/components/form-builder/form-preview";

import { ScrollArea } from "@/components/ui/scroll-area"


export default function Forms() {
  const [fields, setFields] = useState<FormField[]>([]);

  const handleAddField = (field: FormField) => {
    setFields([...fields, field]);
  };

  const handleUpdateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, ...updates } : field)));
  };

  const handleRemoveField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleReorderFields = (startIndex: number, endIndex: number) => {
    const newFields = [...fields];
    const [removed] = newFields.splice(startIndex, 1);
    newFields.splice(endIndex, 0, removed);
    setFields(newFields);
  };

  return (
    <>
      <PageTitle title={'Forms'} padding={false} />
      <ScrollArea className="h-180 w-full">
        <div className={'grid grid-cols-5 gap-2'}>
          <div className={'col-span-1'}>
            <FieldPalette />
          </div>
          
          <div className={'col-span-2'}>
            <FormCanvas
              fields={fields}
              onAddField={handleAddField}
              onUpdateField={handleUpdateField}
              onRemoveField={handleRemoveField}
              onReorderFields={handleReorderFields}
            />
          </div>
          <div className={'col-span-2'}>
            <FormPreview fields={fields} />
          </div>
        </div>
      </ScrollArea>
    </>
  )
}