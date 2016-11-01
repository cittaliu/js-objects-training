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
// var table = [null, null, {steps: 4}, null];
// var record = 0;
// var i=0;
// function pingPong(arr, speed){
//   for(;i<arr.length;i++){
//     if(arr[i]!==null){
//       record = arr[i].steps;
//       break;
//     }
//   }
//   if((record/(arr.length-1))%2 == 0){
//     arr[i].steps++;
//     arr[i+1]=arr[i];
//     arr[i]=null;
//
//   }else{
//     arr[i].steps++;
//     arr[i-1]=arr[i];
//     arr[i]=null;
//   }
//   return arr;
// }
//
// pingPong(table);


function pingPong(arr, speed){
  var length = arr.length;
  var record = 0;
  var i=0;
  for(;i<arr.length;i++){
    if(arr[i]!==null){
      record = arr[i].steps + speed;
      break;
    }
  }
  //decide if it is located at the first/last position in the array;
  //if step number % (length-1) ==0;
  //the object is located either in the first/last position;
  if(record % (length-1)==0){
    if(record/(length-1)%2==0){
      arr[0]=arr[i];
    }else{
      arr[length-1]=arr[i];
      arr[i]=null;
    }
  //decide the location in the array;
  }else if((Math.floor(record/(length-1)))%2==0){
    //move right
    arr[record%(length-1)]=arr[i];
    arr[i]=null;
  }else{
    //move left
    arr[length-1-(record%(length-1))]=arr[i];
    arr[i]=null;
  }
  return arr;

}
