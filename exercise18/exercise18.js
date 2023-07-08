var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["New York", "Paris", "London", "Tokyo", "Sydney"];
console.log("Original order:");
console.log(placesToVisit);
console.log("\nAlphabetical order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nStill in original order:");
console.log(placesToVisit);
console.log("\nReverse alphabetical order (without modifying the original list):");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
