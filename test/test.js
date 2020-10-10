'use strict';
const expect = require('chai').expect;
const index = require('../lib/index.js');

describe('Country-state-picker function test', () => {
    it('should return India country object', () => {
        const country1 = index.getCountry("in");
        expect(JSON.stringify(country1)).to.equal(JSON.stringify({
            "name": "India",
            "code": "in",
            "dial_code": "+91"
        }));
    });

    it('should return India country object', () => {
        const country2 = index.getCountry("india");
        expect(JSON.stringify(country2)).to.equal(JSON.stringify({
            "name": "India",
            "code": "in",
            "dial_code": "+91"
        }));
    });

    it('should return India country object', () => {
        const country3 = index.getCountry("+91");
        expect(JSON.stringify(country3)).to.equal(JSON.stringify({
            "name": "India",
            "code": "in",
            "dial_code": "+91"
        }));
    });

    it('should return India, USA and Australia country object', () => {
        const filteredCountries = index.getFilteredCountries(["+91", "us", "Australia"]);
        expect(JSON.stringify(filteredCountries)).to.equal(JSON.stringify([{
            "name": "India",
            "code": "in",
            "dial_code": "+91"
        }, {
            "name": "United States of America",
            "code": "us",
            "dial_code": "+1"
        }, {
            "name": "Australia",
            "code": "au",
            "dial_code": "+61"
        }
        ]));
    });

    it('should return array of Indian states', () => {
        const states = index.getStates("in");
        expect(JSON.stringify(states)).to.equal(JSON.stringify([
            'Andaman and Nicobar Islands',
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chandigarh',
            'Chhattisgarh',
            'Dadra and Nagar Haveli and Daman and Diu',
            'Delhi',
            'Gujarat',
            'Goa',
            'Haryana',
            'Himachal Pradesh',
            'Jammu and Kashmir',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Ladhak',
            'Lakshadweep',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Odisha',
            'Puducherry',
            'Punjab',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Telangana',
            'Tripura',
            'Uttarakhand',
            'Uttar Pradesh',
            'West Bengal'
        ]));
    });
});
