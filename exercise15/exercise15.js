var guestList = [
    "Atif",
    "Bilal",
    "Khair"
];
function printInvitation() {
    guestList.forEach(function (guest) { return console.log("Hi ".concat(guest, ", You are invited to dinner today.")); });
}
// Update the guest list
guestList[2] = "Ali"; // Replace the third guest with "Ali"
// Send out new invitations
printInvitation();
