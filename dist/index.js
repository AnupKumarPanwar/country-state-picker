"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var countries_1 = __importDefault(require("./data/countries"));
var states_1 = __importDefault(require("./data/states"));
function getCountries() {
    return countries_1.default;
}
exports.getCountries = getCountries;
function getCountry(arg) {
    var countries = getCountries();
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].code.toLowerCase() == arg) {
            return countries[i];
        }
    }
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].name.toLowerCase() == arg) {
            return countries[i];
        }
    }
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].dial_code.toLowerCase() == arg) {
            return countries[i];
        }
    }
    return null;
}
exports.getCountry = getCountry;
function getStates(countryCode) {
    try {
        return states_1.default[countryCode];
    }
    catch (error) {
        return "Invalid country code";
    }
}
exports.getStates = getStates;
