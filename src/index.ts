import countries from './data/countries';
import states from './data/states';

const compare = (country: any, arg: string) => {
  arg = arg.toLowerCase();
  return (
    country.code.toLowerCase() === arg || country.name.toLowerCase() === arg || country.dial_code.toLowerCase() === arg
  );
};

export const getCountries = () => {
  return countries;
};

export const getCountry = (arg: string) => {
  const allCountries = getCountries();

  for (const country of allCountries) {
    if (compare(country, arg)) {
      return country;
    }
  }

  return null;
};

export const getFilteredCountries = (args: any) => {
  const allCountries = getCountries();
  const filteredCountries = [];

  for (const arg of args) {
    for (const country of allCountries) {
      if (compare(country, arg)) {
        filteredCountries.push(country);
        break;
      }
    }
  }

  return filteredCountries;
};

export const getStates = (countryCode: string) => {
  try {
    return states[countryCode];
  } catch (error) {
    return 'Invalid country code';
  }
};
