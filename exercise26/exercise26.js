// Version that runs the if block (alien_color is 'green')
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Version that runs the else block (alien_color is not 'green')
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
