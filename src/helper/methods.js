export const fromCelsius = value => {
  const toKelvin = value + 273.15;
  const toFahrenheit = value * (9 / 5) + 32;
  const toRankine = value * 1.8 + 32 + 459.67;
  return {
    Kelvin: toKelvin,
    Fahrenheit: toFahrenheit,
    Rankine: toRankine
  };
};

export const fromFahrenheit = value => {
  const toCelsius = (value - 32) * (5 / 9);
  const toKelvin = (value + 459.67) * (5 / 9);
  const toRankine = value + 459.67;
  return {
    Celsius: toCelsius,
    Kelvin: toKelvin,
    Rankine: toRankine
  };
};

export const fromKelvin = value => {
  const toCelsius = value - 273.15;
  const toFahrenheit = 1.8 * toCelsius + 32;
  const toRankine = value * 1.8;

  return {
    Celsius: toCelsius,
    Fahrenheit: toFahrenheit,
    Rankine: toRankine
  };
};

export const fromRenkine = value => {
  const toCelsius = (value - 32 - 459.67) / 1.8;
  const toFahrenheit = value - 459.67;
  const toKelvin = value / 1.8;

  return {
    Celsius: toCelsius,
    Fahrenheit: toFahrenheit,
    Kelvin: toKelvin
  };
};
