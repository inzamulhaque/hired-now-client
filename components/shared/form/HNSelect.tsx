import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

type TSelectProps = {
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  children: React.ReactNode;
};

const HNSelect = ({
  name,
  label,
  disabled,
  required,
  placeholder,
  children,
}: TSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Field>
            <FieldLabel>{label}</FieldLabel>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={disabled}
              required={required}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent>{children}</SelectContent>
            </Select>
          </Field>
        )}
      />
    </>
  );
};

export default HNSelect;
