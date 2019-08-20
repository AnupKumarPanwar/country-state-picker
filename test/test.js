'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');
describe('Country-state-picker function test', () => {
    it('should return Indian states', () => {
        // console.log(index.getCountries());

        const country1 = index.getCountry("in");
        expect(JSON.stringify(country1)).to.equal(JSON.stringify({
            "name": "India",
            "code": "in",
            "dial_code": "+91"
        }));


        const country2 = index.getCountry("india");
        expect(JSON.stringify(country2)).to.equal(JSON.stringify({
            "name": "India",
            "code": "in",
            "dial_code": "+91"
        }));


        const country3 = index.getCountry("+91");
        expect(JSON.stringify(country2)).to.equal(JSON.stringify({
            "name": "India",
            "code": "in",
            "dial_code": "+91"
        }));

        const states = index.getStates("in");
        expect(JSON.stringify(states)).to.equal(JSON.stringify([
            "Assam",
            "Goa",
            "Madhya Pradesh",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "National Capital Territory of Delhi",
            "Sikkim",
            "State of Andhra Pradesh",
            "State of Arunachal Pradesh",
            "State of Bihar",
            "State of Chhattisgarh",
            "State of Gujarat",
            "State of Haryana",
            "State of Himachal Pradesh",
            "State of Jammu and Kashmir",
            "State of Jharkhand",
            "State of Karnataka",
            "State of Kerala",
            "State of Maharashtra",
            "State of Nagaland",
            "State of Odisha",
            "State of Punjab",
            "State of Rajasthan",
            "State of Tamil Nad",
            "State of Uttarakhand",
            "Telangana",
            "Tripura",
            "Union Territory of Andaman and Nicobar Islands",
            "Union Territory of Chandigarh",
            "Union Territory of Dadra and Nagar Haveli",
            "Union Territory of Daman and Di",
            "Union Territory of Lakshadweep",
            "Union Territory of Puducherry",
            "Uttar Pradesh",
            "West Bengal"
        ]));
    });
});
