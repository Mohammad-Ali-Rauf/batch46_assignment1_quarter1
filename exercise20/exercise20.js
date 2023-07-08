var countries = ["USA", "Canada", "Germany", "Australia", "Brazil", "Japan", "India"];
var index = 10; // Trying to access an index that is out of bounds
if (index >= 0 && index < countries.length) {
    var country = countries[index];
    console.log(country);
}
else {
    console.error("Invalid index");
}
console.log(countries);
