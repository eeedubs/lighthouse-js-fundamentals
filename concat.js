// I need to place the numbers provided into an ordered array
//

function concat(first, second){
 var array = [];
  for (var i = 0; i < first.length; i++){
   array.push(first[i]);
  }
  for (var j = 0; j < second.length; j++){
    array.push(second[j]);
  }
return array;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);