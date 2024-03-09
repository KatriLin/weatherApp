import { render, screen } from "@testing-library/react";
import CityWeather from "../components/CityWeather";
import { test, expect } from "vitest";

test("render selected city weather data", async () => {
  const weather = {
    id: 1,
    name: "Espoo",
    main: {
      temp: 4,
    },
    weather: [{ description: "Cloudy" }],
  };
  const hourlyWeathers = [{ city: { id: 1 } }];

  const cityWeathertoShow = { id: 1 };

  render(
    <CityWeather
      weather={weather}
      hourlyWeathers={hourlyWeathers}
      cityWeathertoShow={cityWeathertoShow}
    />,
  );

  expect(await screen.findByText("Espoo")).toBeInTheDocument();
  expect(await screen.findByText("4°C")).toBeInTheDocument();
  expect(await screen.findByText("Cloudy")).toBeInTheDocument();
});

test("when city is not selected all cities are shown", async () => {
  const espooWeather = {
    id: 1,
    name: "Espoo",
    main: {
      temp: 4.8,
    },
    weather: [{ description: "Cloudy" }],
  };

  const tampereWeather = {
    id: 2,
    name: "Tampere",
    main: {
      temp: 2,
      humidity: 87,
    },
    weather: [{ description: "Sunny" }],
    wind: { speed: 3.09, deg: 30 },
  };

  const hourlyWeathers = [{ city: { id: 1 } }, { city: { id: 2 } }];

  // leaving cityWeathertoShow away so that no city is selected

  render(
    <>
      <CityWeather weather={espooWeather} hourlyWeathers={hourlyWeathers} />
      <CityWeather weather={tampereWeather} hourlyWeathers={hourlyWeathers} />
    </>,
  );

  // both cities with the weather data is expected to show
  expect(await screen.findByText("Espoo")).toBeInTheDocument();
  expect(await screen.findByText("Tampere")).toBeInTheDocument();
  expect(await screen.findByText("Sunny")).toBeInTheDocument();
  expect(await screen.findByText("Wind: 3.09 m/s")).toBeInTheDocument();
  expect(await screen.findByText("5°C")).toBeInTheDocument();
  expect(await screen.findByText("Humidity: 87 %")).toBeInTheDocument();
});

test("precipitation data is corretly presented when the field is present", async () => {
  const weatherWithRainField = {
    id: 1,
    name: "Espoo",
    main: {
      temp: 4,
    },
    weather: [{ description: "Cloudy" }],
    rain: { "3h": 5.2 }, // Precipitation data field is found
  };
  const hourlyWeathers = [{ city: { id: 1 } }, { city: { id: 2 } }];

  render(
    <CityWeather
      weather={weatherWithRainField}
      hourlyWeathers={hourlyWeathers}
    />,
  );

  expect(await screen.findByText("Precipitation: 5 mm")).toBeInTheDocument();
});

test("precipitation data is corretly presented when the field is NOT present", async () => {
  const weatherWithRainField = {
    id: 1,
    name: "Espoo",
    main: {
      temp: 4,
    },
    weather: [{ description: "Cloudy" }],
  };
  const hourlyWeathers = [{ city: { id: 1 } }, { city: { id: 2 } }];

  render(
    <CityWeather
      weather={weatherWithRainField}
      hourlyWeathers={hourlyWeathers}
    />,
  );

  expect(await screen.findByText("Precipitation: 0 mm")).toBeInTheDocument();
});
