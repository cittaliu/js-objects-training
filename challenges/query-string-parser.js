/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

// YOUR CODE HERE

function parseQueryString(str){
  var combo = str.split("&");
  var result = {};
  combo.forEach(function(element){
    var piece = element.split("=");
    result[piece[0]]=piece[1];
  });
  return result;
}

function queryParameterString(obj){
  var str = "";
  for(var key in obj){
    str += key + "=" + obj[key] + ' ';
  }
  str=str.trim().replace(/[' ']/g,'&');
  return str;
}
