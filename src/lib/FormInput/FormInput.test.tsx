import { render, screen } from "@testing-library/react";
import { FormInput } from "./FormInput";

describe("FormInput", () => {
  it("renders correctly email type", () => {
    render(
      <FormInput name="email" label="Email" type="email" element="input" />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  it("renders correctly password type", () => {
    render(
      <FormInput
        name="password"
        label="Password"
        type="password"
        element="input"
      />
    );

    const input = screen.getByLabelText("Password");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders correctly text type", () => {
    render(<FormInput name="name" label="Name" type="text" element="input" />);

    const input = screen.getByLabelText("Name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders correctly number type", () => {
    render(<FormInput name="age" label="Age" type="number" element="input" />);

    const input = screen.getByLabelText("Age");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });
});
