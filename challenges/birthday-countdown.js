/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

function daysUntilDate(date){
  return Math.ceil((Date.parse(date)-Date.now())/86400000);
}

function birthdayReminder(list){

  var result = [];
  var today = new Date();
  var date = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth();
  list.forEach(function(element){
    var arr = element.dob.split('/');
    if(arr[0]>month || (arr[0]==month && arr[1]>=date)){
      arr[2]=year;
    }
    else if(arr[0]<month || (arr[0]==month && arr[1]<date)){
      arr[2]=year+1;
    }
    var days = arr.join('/');
    result.push(element.name + "'s birthday is in " +daysUntilDate(days)+" days");
  });

  result = result.sort(function(str1, str2){
    var day1=parseInt(str1.replace(/[^0-9]/g,''));
    var day2=parseInt(str2.replace(/[^0-9]/g,''));
    return (day1 == day2)? 0:((day1<day2)? -1:1);
  });
  return result;
}
