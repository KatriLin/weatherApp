import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import DropdownMenu from "../components/DropdownMenu";

const cities = [
  { id: 1, name: "Espoo" },
  { id: 2, name: "Tampere" },
  { id: 3, name: "Kuopio" },
  { id: 4, name: "Jyväskylä" },
];

test("corrent option if found from the dropdown menu", async () => {
  const handleCitySelect = vi.fn();

  render(
    <DropdownMenu
      cities={cities}
      handleCitySelect={handleCitySelect}
      selectedCity="allCities"
    />,
  );

  //start new session
  const user = userEvent.setup();

  const option = await screen.findByText("Kuopio");
  await user.click(option);
  expect(option).toBeDefined();
});
