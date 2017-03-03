/*Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.
Return the rest of the array, otherwise return an empty array.*/
function dropElements(arr, func) {
 var x = true;
if (arr.filter(func).length < 1) {
  return [];
}
while(x) {
  for (num of arr) {
      if (!func(num)){  
         arr.shift();
         break;
      } else {
        return arr; 
      }
    }
 
  }
}
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
