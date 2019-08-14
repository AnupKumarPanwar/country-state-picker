# Country State Picker

NPM package to get the list of countries and their states.

## Installation

`npm i country-state-picker --save`

## Usage

### `getCountries()`

This function will return the array of all the countries.

#### Output

```javascript
[
    {
        name: 'Afghanistan',
        code: 'af'
    },
    {
      name: 'Albania',
      code: 'al'
    },
    {
      name: 'Algeria',
      code: 'dz'
    },
    {
      name: 'Andorra',
      code: 'ad'
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
]
```
