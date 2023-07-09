var current_users = ['John', 'Alice', 'Bob', 'Eric', 'Sarah'];
var new_users = ['Mike', 'john', 'Emma', 'sarah', 'Tom'];
for (var i = 0; i < new_users.length; i++) {
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    }
    else {
        console.log("The username '" + new_users[i] + "' is available.");
    }
}
