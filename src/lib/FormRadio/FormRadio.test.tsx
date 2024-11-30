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

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });
});
