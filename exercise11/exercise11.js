"use strict";
exports.__esModule = true;
exports.names = void 0;
exports.names = ["Ali", "Hadi", "Usman", "Omar"];
function printNames(names) {
    names.map(function (name) {
        console.log("\n", name, "\n");
    });
}
printNames(exports.names);
