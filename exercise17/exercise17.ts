const guestList = ['Hadi', 'Atif', 'Bilal', 'Ali', 'Khair', 'Hasan'];

function printInvitation() {
  guestList.forEach((guest) =>
    console.log(`Hi ${guest}, You are invited to dinner today.`)
  );
}

while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

guestList.forEach((guest) => {
  console.log(`${guest}, you're still invited to dinner.`);
});
