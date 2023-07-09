function create_car(manufacturer, model, ...options) {
  let car = {
    manufacturer: manufacturer,
    model: model,
  };

  for (let i = 0; i < options.length; i += 2) {
    let key = options[i];
    let value = options[i + 1];
    car[key] = value;
  }

  return car;
}

// Calling the function with required information and additional name-value pairs
let car = create_car(
  'Toyota',
  'Camry',
  'color',
  'blue',
  'year',
  2022,
  'feature',
  'navigation'
);

// Printing the returned object
console.log(car);
