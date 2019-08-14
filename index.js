exports.getCountries = function () {
    let countries = require('./data/countries.json');
    return countries;
};

exports.getStates = function (countryCode) {
    let states = require('./data/states.json');
    try {
        return states[countryCode];
    } catch (error) {
        return 'Invalid country code';
    }
};
