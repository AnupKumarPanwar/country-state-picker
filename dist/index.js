"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = __importDefault(require("./data/countries"));
var states_1 = __importDefault(require("./data/states"));
var compare = function (country, arg) {
    arg = arg.toLowerCase();
    return country.code.toLowerCase() == arg || country.name.toLowerCase() == arg || country.dial_code.toLowerCase() == arg;
};
function getCountries() {
    return countries_1.default;
}
exports.getCountries = getCountries;
function getCountry(arg) {
    var countries = getCountries();
    for (var i = 0; i < countries.length; i++) {
        if (compare(countries[i], arg)) {
            return countries[i];
        }
    }
    return null;
}
exports.getCountry = getCountry;
function getFilteredCountries(args) {
    var countries = getCountries();
    var filteredCountries = [];
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        for (var i = 0; i < countries.length; i++) {
            if (compare(countries[i], arg)) {
                filteredCountries.push(countries[i]);
                break;
            }
        }
    }
    return filteredCountries;
}
exports.getFilteredCountries = getFilteredCountries;
function getStates(countryCode) {
    try {
        return states_1.default[countryCode];
    }
    catch (error) {
        return "Invalid country code";
    }
}
exports.getStates = getStates;
