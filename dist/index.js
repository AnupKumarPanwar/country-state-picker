"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var countries = __importStar(require("./data/countries"));
var states_1 = __importDefault(require("./data/states"));
function getCountries() {
    return countries;
}
exports.getCountries = getCountries;
function getStates(countryCode) {
    try {
        return states_1.default[countryCode];
    }
    catch (error) {
        return "Invalid country code";
    }
}
exports.getStates = getStates;
