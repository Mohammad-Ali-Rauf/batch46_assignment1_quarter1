const guestList = [
    "Atif",
    "Bilal",
    "Khair"
]

function printInvitation() {
    guestList.forEach(guest => console.log(`Hi ${guest}, You are invited to dinner today.`))
}

printInvitation()