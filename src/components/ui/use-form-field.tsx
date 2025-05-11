import * as React from "react";
import { useFormContext } from "react-hook-form";
import { FormFieldContext, FormItemContext } from "./form";
import { useState } from "react";

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as { name: string };
  const itemContext = React.useContext(FormItemContext) as { id: string };
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const filters: string[] = [
  "All",
  "Fullstack",
  "UI/UX",
  "Data Visualization",
  "Backend",
  "Others",
];

export function FilterDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="px-4 py-2 rounded-full bg-muted w-full"
        onClick={() => setOpen((o) => !o)}
      >
        Filter
      </button>
      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-50 flex flex-col">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 hover:bg-gray-100 text-left"
              onClick={() => {
                // handle filter selection here
                setOpen(false);
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function FilterBar() {
  return (
    <div className="border border-red-500 w-full px-4">
      <div className="border border-blue-500 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 text-sm rounded-full border border-gray-300 bg-white hover:bg-gray-100"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
