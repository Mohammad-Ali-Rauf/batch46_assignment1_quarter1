function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown city!'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function with different cities and countries
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');
