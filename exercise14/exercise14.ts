export const guestList: string[] = ['Atif', 'Bilal', 'Khair'];

let isPrintInvitationEnabled = false;

export function enablePrintInvitation(): void {
  isPrintInvitationEnabled = true;
}

export function printInvitation(): void {
  if (isPrintInvitationEnabled) {
    guestList.forEach((guest) =>
      console.log(`Hi ${guest}, You are invited to dinner today.`)
    );
  }
}
