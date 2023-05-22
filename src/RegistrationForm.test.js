import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("RegistrationForm", () => {
  test("should render the form correctly", () => {
    render(<RegistrationForm />);
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByLabelText("Number:")).toBeInTheDocument();
    expect(screen.getByLabelText("Other Details:")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("should display error messages for invalid form submission", () => {
    render(<RegistrationForm />);

    fireEvent.click(screen.getByText("Register"));

    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
    expect(screen.getByText("Number is required")).toBeInTheDocument();
  });

  test("should display error message for invalid email", () => {
    render(<RegistrationForm />);

    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "invalidemail" }
    });
    fireEvent.click(screen.getByText("Register"));

    expect(screen.getByText("Email is invalid")).toBeInTheDocument();
  });

  test("should display error message for invalid password", () => {
    render(<RegistrationForm />);

    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "pass" }
    });
    fireEvent.click(screen.getByText("Register"));

    expect(
      screen.getByText("Password should be at least 6 characters")
    ).toBeInTheDocument();
  });

  test("should display error message for invalid number", () => {
    render(<RegistrationForm />);

    fireEvent.change(screen.getByLabelText("Number:"), {
      target: { value: "123" }
    });
    fireEvent.click(screen.getByText("Register"));

    expect(screen.getByText("Number should be 10 digits")).toBeInTheDocument();
  });

  test("should handle form submission successfully", () => {
    render(<RegistrationForm />);

    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "test@example.com" }
    });
    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "password123" }
    });
    fireEvent.change(screen.getByLabelText("Number:"), {
      target: { value: "1234567890" }
    });
    fireEvent.change(screen.getByLabelText("Other Details:"), {
      target: { value: "Some details" }
    });
    fireEvent.click(screen.getByText("Register"));

    expect(screen.getByText("Registration successful!")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toHaveValue("");
    expect(screen.getByLabelText("Password:")).toHaveValue("");
    expect(screen.getByLabelText("Number:")).toHaveValue("");
    expect(screen.getByLabelText("Other Details:")).toHaveValue("");
  });
});
