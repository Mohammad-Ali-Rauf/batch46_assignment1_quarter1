const names = ["Ali", "Hadi", "Usman", "Omar"];

function printNames(names: string[]) {
    names.forEach(name => {
        console.log("\n", name, "\n");
    });
}

printNames(names);