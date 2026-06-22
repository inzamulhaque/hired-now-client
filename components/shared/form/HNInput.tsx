import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
};

const HNInput = ({
  type,
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

            <Input
              {...field}
              id={name}
              type={type}
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

export default HNInput;
