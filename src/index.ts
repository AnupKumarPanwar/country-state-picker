import countries, {Country} from './data/countries';
import states from './data/states';

const compare = (country: Country, arg: string) => {
  const lowerCase = arg.toLocaleLowerCase();

  return (
    country.code.toLocaleLowerCase() === lowerCase ||
    country.name.toLocaleLowerCase() === lowerCase ||
    country.dial_code.toLocaleLowerCase() === lowerCase
  );
};

export const getCountries = () => countries;

export const getCountry = (arg: string) => {
  return getCountries().find((country) => compare(country, arg));
};

export const getFilteredCountries = (args: string[]) => {
  return getCountries().filter(country => args.some((arg) => compare(country, arg)))
};

export const getStates = (country: Country | string) => {
  const code = typeof country === 'string' ? country.toLocaleLowerCase() : country.code

  return states[code] || []
};
