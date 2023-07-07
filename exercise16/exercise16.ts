const guestList = [
    "Atif",
    "Bilal",
    "Khair"
]

// Update the guest list
guestList.unshift("Hadi")
guestList.push('Hasan')

// Add a guest to the middle of the array
const newGuest = "Ali";
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuest);

function printInvitation() {
    guestList.forEach(guest => console.log(`Hi ${guest}, You are invited to dinner today.`))
}

// Send out new invitations
printInvitation();

console.log('I found a bigger dining table and invited three more peoples.')