function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Calling the function with required information and additional name-value pairs
var car = create_car('Toyota', 'Camry', 'color', 'blue', 'year', 2022, 'feature', 'navigation');
// Printing the returned object
console.log(car);
