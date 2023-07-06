// This program is printing the person name with different name cases

var personName2 = "Ali";
function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(toTitleCase(personName2));
