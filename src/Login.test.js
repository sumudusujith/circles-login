import { render, screen } from "@testing-library/react";
//import App from "./App";
import Login from "./components/pages/Login";

test("Check if initial values and components are loaded", () => {
  render(<Login />);

  const mainHeader = screen.getByRole("heading", {
    name: "Ready to take  a Challenge?",
  });
  expect(mainHeader).toBeInTheDocument();
});
