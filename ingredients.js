var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  x++
}
console.log("\n");
// Write a for loop that prints out the contents of ingredients:

for (var y = 0; y < ingredients.length; y++){
  console.log(ingredients[y]);
}
console.log("\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var z = (ingredients.length - 1); z >= 0; z--){
  console.log(ingredients[z]);
}