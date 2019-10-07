# Country State Picker

NPM package to get the list of countries and their states.

[![npm version](https://badge.fury.io/js/country-state-picker.svg)](https://badge.fury.io/js/country-state-picker)

## Installation

`npm i country-state-picker --save`

## Usage

### `getCountries()`

This function will return the array of all the countries.

#### Output

```javascript
[
    {
        "name": "Afghanistan",
        "code": "af",
        "dial_code": "+93"
    },
    {
        "name": "Albania",
        "code": "al",
        "dial_code": "+355"
    },
    {
        "name": "Algeria",
        "code": "dz",
        "dial_code": "+213"
    },
    {
        "name": "Andorra",
        "code": "ad",
        "dial_code": "+376"
    }
  ...
]
```

---

### `getStates(<country_code>)`

This function will return the array of all the states of a given country.

### Example

To get the list of all the states of INDIA, the function call will look like:

```javascript
let states = getStates('in');

console.log(states)
```

#### Output

```javascript
[
    "Assam",
    "Goa",
    "Madhya Pradesh",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "National Capital Territory of Delhi",
    "Sikkim",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Bihar",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Tamil Nad",
    "Uttarakhand",
    "Telangana",
    "Tripura",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Di",
    "Lakshadweep",
    "Puducherry",
    "Uttar Pradesh",
    "West Bengal"
]
```

### `getCountry(<country_name | country_code | dial_code>)`

This function will return the country corresponding to the argument passed.

### Example

To get the country having dial code "+91", the function call will look like:

```javascript
let country = getCountry('+91');

console.log(country)
```

#### Output

```javascript
{
    "name": "India",
    "code": "in",
    "dial_code": "+91"
}
```

### `getFilteredCountries([<country_name | country_code | dial_code>])`

This function will receive an array of arguments and return the array of countries corresponding to the argument.

### Example

To get only India, USA and Australia country objects, the function call will look like:

```javascript
let filteredCountries = getFilteredCountries(['+91', 'us', 'Australia']);

console.log(filteredCountries)
```

#### Output

```javascript
[
    {
        "name": "India",
        "code": "in",
        "dial_code": "+91"
    }, 
    {
        "name": "United States of America",
        "code": "us",
        "dial_code": "+1"
    },
    {
        "name": "Australia",
        "code": "au",
        "dial_code": "+61"
    }
]
```
