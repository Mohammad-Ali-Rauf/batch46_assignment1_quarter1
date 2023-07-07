var guestList = ['Hadi', 'Atif', 'Bilal', 'Ali', 'Khair', 'Hasan'];
function printInvitation() {
    guestList.forEach(function (guest) {
        return console.log("Hi ".concat(guest, ", You are invited to dinner today."));
    });
}
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("".concat(guest, ", you're still invited to dinner."));
});
