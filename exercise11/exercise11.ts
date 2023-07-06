export const names = ["Ali", "Hadi", "Usman", "Omar"]

function printNames(names: string[]) {
    names.map(name => {
        console.log("\n", name, "\n")
    })
}

printNames(names)