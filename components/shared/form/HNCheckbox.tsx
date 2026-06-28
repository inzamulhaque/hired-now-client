import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";

type TCheckbxProps = {
  name: string;
};

const HNCheckbox = ({ name }: TCheckbxProps) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
    </>
  );
};

export default HNCheckbox;
