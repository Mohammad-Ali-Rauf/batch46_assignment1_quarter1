// These are to exercises combined 36 and 37

function make_shirt(size = 'Large', message = 'I love TypeScript') {
  console.log(`The T-shirt size is ${size} and the message printed on it is: ${message}`);
}

// Calling the function with default values
make_shirt();

// Calling the function with medium size and default message
make_shirt('Medium');

// Calling the function with custom size and message
make_shirt('Small', 'Hello, JavaScript!');
