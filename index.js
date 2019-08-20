exports.getCountries = function () {
    let countries = require('./data/countries.json');
    return countries;
};

exports.getCountry = function (arg) {
    let countries = require('./data/countries.json');

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
};

exports.getStates = function (countryCode) {
    let states = require('./data/states.json');
    try {
        return states[countryCode];
    } catch (error) {
        return 'Invalid country code';
    }
};
