import type { FormOption, FormElement } from "@/lib/types";

type FormSelectProps = {
  id?: string;
  className?: string;
  name: string;
  label: string;
  element?: Extract<FormElement, "select">;
  options: FormOption[];
};

const FormSelect = ({ className, options, ...props }: FormSelectProps) => {
  return (
    <div className={className}>
      <label htmlFor={props.name}>{props.label}</label>
      <select {...props} id={props.id || props.name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export type { FormSelectProps };
export { FormSelect };
