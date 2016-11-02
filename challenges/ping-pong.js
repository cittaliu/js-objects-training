/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE

function pingPong(speed, ...arrs ){
  //if there are more than one player
  //use an array to store the results from each player
  var result = [];
  arrs.forEach(function(arr){
    var length = arr.length;
    var next = 0;
    var maxIndex = length-1;
    var i=0;
    for(;i<length;i++){
      if(arr[i]!==null){
        next = arr[i].steps + speed;
        break;
      }
    }
    //decide the location in the array;
    if((Math.floor(next/maxIndex))%2==0){
      //move right
      arr[i].steps += speed;
      if(next%maxIndex !== i){
        arr[next%maxIndex]=arr[i];
        arr[i]=null;
      }
    }else{
      //move left
      arr[i].steps += speed;
      if(maxIndex-(next%maxIndex) !== i){
        arr[maxIndex-(next%maxIndex)] = arr[i];
        arr[i] = null;
      }
    }
    result.push(arr);
  });
  return result;

}

//test code
var table1 = [{steps: 0}, null, null, null];
var table2 = [null, null, {steps: 2}, null];
console.log(pingPong(1, table1, table2));
console.log(pingPong(1, table1, table2));
console.log(pingPong(1, table1, table2));
console.log(pingPong(1, table1, table2));
console.log(pingPong(1, table1, table2));
