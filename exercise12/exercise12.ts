import names from "../exercise11/exercise11.js";

function greetFriends(names: string[]) {
    names.forEach(name => {
        console.log(`Greetings, My Friend ${name}`);
    });
}

greetFriends(names);