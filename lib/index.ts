import countries from "./data/countries";
import states from "./data/states";

export function getCountries(): any {
    return countries;
}

export function getCountry(arg: string): any {
    let countries = getCountries();

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].code.toLowerCase() == arg) {
            return countries[i];
        }
    }

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name.toLowerCase() == arg) {
            return countries[i];
        }
    }

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].dial_code.toLowerCase() == arg) {
            return countries[i];
        }
    }

    return null;
}

export function getStates(countryCode: string): any {
    try {
        return states[countryCode];
    } catch (error) {
        return "Invalid country code";
    }
}
