function printHorizontalLine(length: number): void {
  const line = "\u2500".repeat(length);
  console.log(line);
}

const lineLength = 40

printHorizontalLine(lineLength)

console.log("\t", 5+3, "\t")

printHorizontalLine(lineLength);

console.log("\t", 12-4, "\t")

printHorizontalLine(lineLength)

console.log("\t", 4*2, "\t")

printHorizontalLine(lineLength);

console.log("\t", 16/2, "\t")

printHorizontalLine(lineLength)