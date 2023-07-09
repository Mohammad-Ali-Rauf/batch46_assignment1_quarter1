function make_sandwich(...items) {
  console.log('Sandwich Summary:');
  console.log('Bread');
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
  console.log('Bread\n');
}

// Calling the function with different numbers of arguments
make_sandwich('Ham', 'Cheese');
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Chicken', 'Bacon', 'Avocado', 'Mayo');
