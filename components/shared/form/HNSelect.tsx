import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

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
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Field>
            <FieldLabel>{label}</FieldLabel>
            <Select
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              disabled={disabled}
              required={required}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

              <SelectContent
                className="
                      bg-black
                      dark:bg-amber-50
                      text-white
                      dark:text-black
                      border-border
                      shadow-lg
                    "
              >
                {children}
              </SelectContent>
            </Select>

            {error && <FieldError className="text-red-700" errors={[error]} />}
          </Field>
        )}
      />
    </>
  );
};

export default HNSelect;
