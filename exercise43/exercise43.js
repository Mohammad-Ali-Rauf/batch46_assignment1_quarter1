var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great ".concat(magicians[i]));
    }
    return modifiedMagicians;
}
// Create an array of magician's names
var magicians = [
    'Harry Houdini',
    'David Copperfield',
    'Penn Jillette',
    'Teller',
];
// Call the make_great() function with a copy of the array and store the modified array in a separate variable
var modifiedMagicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians() function with the original and modified arrays
console.log('Original Magicians:');
show_magicians(magicians);
console.log('\nModified Magicians:');
show_magicians(modifiedMagicians);
