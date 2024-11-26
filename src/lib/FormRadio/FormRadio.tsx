import type { FormOption, InputTypes, FormElement } from "@/lib/types";

type FormRadioProps = {
  className?: string;
  name: string;
  label: string;
  type: Extract<InputTypes, "radio">;
  element: Extract<FormElement, "radio">;
  options: FormOption[];
};

const FormRadio = ({ className, options, ...props }: FormRadioProps) => {
  return (
    <div className={className}>
      {options.map(({ value, label }) => (
        <label key={value}>
          <input {...props} type="radio" value={value} />
          {label}
        </label>
      ))}
    </div>
  );
};

export type { FormRadioProps };
export { FormRadio };
