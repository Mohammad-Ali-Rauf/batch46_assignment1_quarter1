function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians) {
  let modifiedMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    modifiedMagicians.push(`the Great ${magicians[i]}`);
  }
  return modifiedMagicians;
}

// Create an array of magician's names
let magicians = [
  'Harry Houdini',
  'David Copperfield',
  'Penn Jillette',
  'Teller',
];

// Call the make_great() function with a copy of the array and store the modified array in a separate variable
let modifiedMagicians = make_great([...magicians]);

// Call the show_magicians() function with the original and modified arrays
console.log('Original Magicians:');
show_magicians(magicians);
console.log('\nModified Magicians:');
show_magicians(modifiedMagicians);
