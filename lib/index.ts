import * as countries from "./data/countries";
import states from "./data/states";

export function getCountries(): any {
    return countries;
}

export function getStates(countryCode: string): any {
  try {
        return states[countryCode];
    } catch (error) {
        return "Invalid country code";
    }
}
