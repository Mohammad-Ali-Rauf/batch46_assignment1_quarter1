"use strict";
exports.__esModule = true;
exports.printInvitation = exports.enablePrintInvitation = exports.guestList = void 0;
exports.guestList = ['Atif', 'Bilal', 'Khair'];
var isPrintInvitationEnabled = false;
function enablePrintInvitation() {
    isPrintInvitationEnabled = true;
}
exports.enablePrintInvitation = enablePrintInvitation;
function printInvitation() {
    if (isPrintInvitationEnabled) {
        exports.guestList.forEach(function (guest) {
            return console.log("Hi ".concat(guest, ", You are invited to dinner today."));
        });
    }
}
exports.printInvitation = printInvitation;
