'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');
describe('Country-state-picker function test', () => {
    it('should return Indian states', () => {
        console.log(index.getCountries());
        const result = index.getStates("in");
        expect(JSON.stringify(result)).to.equal(JSON.stringify([
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
