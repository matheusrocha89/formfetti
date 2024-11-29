import { render, screen } from "@testing-library/react";
import { FormSelect } from "./FormSelect";

describe("FormSelect", () => {
  it("renders correctly", () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];

    render(<FormSelect name="select" label="Select" options={options} />);

    const select = screen.getByLabelText("Select");
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute("name", "select");
    expect(select).toHaveAttribute("id", "select");
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });
});
