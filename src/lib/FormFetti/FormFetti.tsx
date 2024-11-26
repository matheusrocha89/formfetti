import { Fragment } from "react";
import type {
  FormInputProps,
  FormSelectProps,
  FormRadioProps,
} from "@/lib/types";
import { FormInput, FormSelect, FormRadio } from "../";

type FormSchema = FormInputProps | FormSelectProps | FormRadioProps;

const formSchema: FormSchema[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    element: "input",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    element: "input",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    element: "input",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    element: "input",
  },
  {
    name: "gender",
    label: "Gender",
    element: "select",
    options: [
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
    ],
  },
  {
    name: "color",
    label: "Color",
    type: "radio",
    element: "radio",
    options: [
      {
        value: "red",
        label: "Red",
      },
      {
        value: "green",
        label: "Green",
      },
      {
        value: "blue",
        label: "Blue",
      },
    ],
  },
];

function renderElement(props: FormSchema): JSX.Element {
  switch (props.element) {
    case "input":
      return <FormInput {...props} />;

    case "select":
      return <FormSelect {...props} />;

    case "radio":
      return <FormRadio {...props} />;

    default:
      throw new Error("Invalid element type");
  }
}

const FormFetti = () => {
  return (
    <>
      {formSchema.map((props) => (
        <Fragment key={props.name}>{renderElement(props)}</Fragment>
      ))}
    </>
  );
};

export { FormFetti };
