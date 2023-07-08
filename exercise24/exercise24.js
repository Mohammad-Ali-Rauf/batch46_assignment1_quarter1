// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
console.log("Is fruit == 'Orange'? I predict False.");
console.log(fruit == 'Orange');
console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit != 'apple');
// Tests using the lower case function
var city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
console.log("Is city.toLowerCase() != 'los angeles'? I predict True.");
console.log(city.toLowerCase() != 'los angeles');
console.log("Is city.toLowerCase() == 'new york city'? I predict False.");
console.log(city.toLowerCase() == 'new york city');
console.log("Is city.toLowerCase() != 'new york'? I predict False.");
console.log(city.toLowerCase() != 'new york');
// Numerical tests
var number = 7;
console.log("Is number == 7? I predict True.");
console.log(number == 7);
console.log("Is number != 5? I predict True.");
console.log(number != 5);
console.log("Is number > 3? I predict True.");
console.log(number > 3);
console.log("Is number < 10? I predict True.");
console.log(number < 10);
console.log("Is number >= 7? I predict True.");
console.log(number >= 7);
console.log("Is number <= 7? I predict True.");
console.log(number <= 7);
// Tests using "and" and "or" operators
var temperature = 25;
var isSunny = true;
console.log("Is temperature > 20 and isSunny == true? I predict True.");
console.log(temperature > 20 && isSunny);
console.log("Is temperature > 30 or isSunny == false? I predict False.");
console.log(temperature > 30 || !isSunny);
console.log("Is temperature > 30 and isSunny == false? I predict False.");
console.log(temperature > 30 && !isSunny);
// Test whether an item is in an array
var colors = ['red', 'blue', 'green'];
console.log("Is 'blue' in the colors array? I predict True.");
console.log(colors.includes('blue'));
console.log("Is 'yellow' in the colors array? I predict False.");
console.log(colors.includes('yellow'));
// Test whether an item is not in an array
console.log("Is 'purple' not in the colors array? I predict True.");
console.log(!colors.includes('purple'));
console.log("Is 'red' not in the colors array? I predict False.");
console.log(!colors.includes('red'));
