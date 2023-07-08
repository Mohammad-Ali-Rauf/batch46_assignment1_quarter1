const countries: string[] = ["USA", "Canada", "Germany", "Australia", "Brazil", "Japan", "India"];

const index = 10; // Trying to access an index that is out of bounds

if (index >= 0 && index < countries.length) {
  const country = countries[index];
  console.log(country);
} else {
  console.error("Invalid index");
}

console.log(countries);