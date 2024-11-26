import type { InputTypes, FormElement } from "@/lib/types";

type FormInputProps = {
  id?: string;
  className?: string;
  name: string;
  label: string;
  type: InputTypes;
  element: Extract<FormElement, "input">;
};

const FormInput = ({ className, ...props }: FormInputProps) => {
  return (
    <div className={className}>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input id={props.id || props.name} {...props} />
    </div>
  );
};

export type { FormInputProps };
export { FormInput };
