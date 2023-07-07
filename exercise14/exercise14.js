var guestList = [
    "Atif",
    "Bilal",
    "Khair"
];
function printInvitation() {
    guestList.forEach(function (guest) { return console.log("Hi ".concat(guest, ", You are invited to dinner today.")); });
}
printInvitation();
