const placesToVisit: string[] = ["New York", "Paris", "London", "Tokyo", "Sydney"];

console.log("Original order:");
console.log(placesToVisit);

console.log("\nAlphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort());

console.log("\nStill in original order:");
console.log(placesToVisit);

console.log("\nReverse alphabetical order (without modifying the original list):");
console.log([...placesToVisit].sort().reverse());

console.log("\nStill in original order:");
console.log(placesToVisit);

console.log("\nReversed order:");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nReversed order again (back to original):");
placesToVisit.reverse();
console.log(placesToVisit);

console.log("\nSorted in alphabetical order:");
placesToVisit.sort();
console.log(placesToVisit);

console.log("\nSorted in reverse alphabetical order:");
placesToVisit.sort().reverse();
console.log(placesToVisit);

