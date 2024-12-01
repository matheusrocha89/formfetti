import { render, screen } from "@testing-library/react";
import { FormRadio } from "./FormRadio";

describe("FormRadio", () => {
  it("renders correctly", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    render(
      <FormRadio
        type="radio"
        element="radio"
        name="radio"
        label="Radio"
        options={options}
      />
    );

    const radioInputs = screen.getAllByRole("radio");
    expect(radioInputs).toHaveLength(2);
    radioInputs.forEach((input, index) => {
      expect(input).toHaveAttribute("name", "radio");
      expect(input).toHaveAttribute("value", options[index].value);
      expect(input).toHaveAttribute("type", "radio");
    });

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });
});
