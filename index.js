compare = function (country, arg) {
    arg = arg.toLowerCase();
    return country.code.toLowerCase() == arg || country.name.toLowerCase() == arg || country.dial_code.toLowerCase() == arg
};

exports.getCountries = function () {
    let countries = require('./data/countries.json');
    return countries;
};

exports.getCountry = function (arg) {
    let countries = require('./data/countries.json');

    for (let i = 0; i < countries.length; i++) {
        if (compare(countries[i], arg)) {
            return countries[i];
        }
    }

    return null;
};

exports.getFilteredCountries = function (args) {
    let countries = require('./data/countries.json');
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
};

exports.getStates = function (countryCode) {
    let states = require('./data/states.json');
    try {
        return states[countryCode];
    } catch (error) {
        return 'Invalid country code';
    }
};
