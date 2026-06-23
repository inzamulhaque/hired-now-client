import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

import { Controller, useFormContext } from "react-hook-form";

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
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field>
            <FieldLabel htmlFor={name}>
              {label}
              {required && <span className="ml-1 text-destructive">*</span>}
            </FieldLabel>

            <Textarea
              {...field}
              value={field.value ?? ""}
              id={name}
              disabled={disabled}
              placeholder={placeholder}
              className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
            />

            {error && <FieldError className="text-red-700" errors={[error]} />}
          </Field>
        )}
      />
    </>
  );
};

export default HNTextArea;
