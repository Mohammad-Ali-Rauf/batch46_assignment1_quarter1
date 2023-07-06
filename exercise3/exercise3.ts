let personName2 = "Ali"

function toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(personName2.toLowerCase())
console.log(personName2.toUpperCase())
console.log(toTitleCase(personName2))