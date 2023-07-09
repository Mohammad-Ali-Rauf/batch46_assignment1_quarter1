function describe_city(city, country = 'Unknown city!'): void {
  console.log(`${city} is in ${country}.`);
}

// Calling the function with different cities and countries
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');
