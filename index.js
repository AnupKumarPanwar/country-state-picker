exports.getCountries = function () {
    let countries = require('./data/countries.json');
    console.log(countries);
    return countries;
}

exports.getStates = function (countryCode) {
    let states = require('./data/states.json');
    try {
        console.log(states[countryCode]);
        return states[countryCode];
    } catch (error) {
        console.log('Invalid country code');
        return 'Invalid country code';
    }
}