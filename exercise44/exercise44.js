function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich Summary:');
    console.log('Bread');
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log('Bread\n');
}
// Calling the function with different numbers of arguments
make_sandwich('Ham', 'Cheese');
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Chicken', 'Bacon', 'Avocado', 'Mayo');
