function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = 'the Great ' + magicians[i];
    }
}
// Create an array of magician's names
var magicians = [
    'Harry Houdini',
    'David Copperfield',
    'Penn Jillette',
    'Teller',
];
// Call the make_great() function to modify the array
make_great(magicians);
// Call the show_magicians() function to print the modified list
show_magicians(magicians);
