import { render, screen } from "@testing-library/react";
import ThreeHourWeather from "../components/ThreeHourWeather";
import { test, expect } from "vitest";

test("renders threehour weather corretly", async () => {
  const threeHourWeathers = {
    list: [
      {
        dt: 1709974800,
        main: { temp: -2.7, humidity: 56 },
        wind: { speed: 2 },
        rain: { "3h": 0.5 },
      },
    ],
  };

  render(<ThreeHourWeather threeHourWeathers={threeHourWeathers} />);

  expect(await screen.findByText("11:00")).toBeInTheDocument();
  expect(await screen.findByText("-3°C")).toBeInTheDocument();
  expect(await screen.findByText("2m/s")).toBeInTheDocument();
  expect(await screen.findByText("56 %")).toBeInTheDocument();

});
