type FormElement = "input" | "select" | "radio";

type InputTypes = "text" | "email" | "password" | "number" | "radio";

type FormOption = {
  value: string;
  label: string;
};

export type { FormElement, FormOption, InputTypes };
export type { FormInputProps } from "./FormInput";
export type { FormSelectProps } from "./FormSelect";
export type { FormRadioProps } from "./FormRadio";
