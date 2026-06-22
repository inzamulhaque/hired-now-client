import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
};

const HNTextArea = ({
  name,
  label,
  disabled,
  required,
  placeholder,
}: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor={name}>
              {label}
              {required && <span className="ml-1 text-destructive">*</span>}
            </FieldLabel>

            <Textarea
              {...field}
              id={name}
              disabled={disabled}
              placeholder={placeholder}
              className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
            />
          </Field>
        )}
      />
    </>
  );
};

export default HNTextArea;
