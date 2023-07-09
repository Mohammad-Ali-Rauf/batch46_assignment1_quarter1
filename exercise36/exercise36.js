// These are to exercises combined 36 and 37
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The T-shirt size is ".concat(size, " and the message printed on it is: ").concat(message));
}
// Calling the function with default values
make_shirt();
// Calling the function with medium size and default message
make_shirt('Medium');
// Calling the function with custom size and message
make_shirt('Small', 'Hello, JavaScript!');
