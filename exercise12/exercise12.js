var friendNames = ["Ali", "Hadi", "Usman", "Omar"];
function greetFriends() {
    friendNames.forEach(function (name) {
        console.log("Greetings, My Friend ".concat(name));
    });
}
greetFriends();
