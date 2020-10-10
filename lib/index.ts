import countries from './data/countries';
import states from './data/states';

const compare = function (country: any, arg: string) {
  arg = arg.toLowerCase();
  return (
    country.code.toLowerCase() == arg || country.name.toLowerCase() == arg || country.dial_code.toLowerCase() == arg
  );
};

export function getCountries(): any {
  return countries;
}

export function getCountry(arg: string): any {
  let countries = getCountries();

  for (let i = 0; i < countries.length; i++) {
    if (compare(countries[i], arg)) {
      return countries[i];
    }
  }

  return null;
}

export function getFilteredCountries(args: any): any {
  let countries = getCountries();
  let filteredCountries = [];

  for (let arg of args) {
    for (let i = 0; i < countries.length; i++) {
      if (compare(countries[i], arg)) {
        filteredCountries.push(countries[i]);
        break;
      }
    }
  }

  return filteredCountries;
}

export function getStates(countryCode: string): any {
  try {
    return states[countryCode];
  } catch (error) {
    return 'Invalid country code';
  }
}
