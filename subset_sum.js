// Solution 1
// This program doesnt work for negative numbers
// This algorithm runs in O(2n) time because in the worse case.
// W we need to create every possible subset of the array to check if any of them equal the goal sum,
// and there are 2n possible sets.

function ArrayAdditionI(arr) {
  
    // get largest number and remove it from array
    var sum = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(sum), 1);
    
    // power set
    var sets = [[]];
  
    // generate the power set and for each new set
    // check if the temporary sum equals our sum above
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0, len = sets.length; j < len; j++) {
        var temp = sets[j].concat(arr[i]);
        sets.push(temp);
        var s = temp.reduce(function(p, c) { return p + c; });
        if (s === sum) { return "true"; }
      }
    }
    
    return "false";
           
  }
     
console.log(ArrayAdditionI([1,2,3,5]));
console.log(ArrayAdditionI([1,2,3,7]));


// Solution 2

function ArrayAddition(arr) { 
    var mp = {
        0: 1
    };
    
    arr = arr.sort(function(a, b){return a-b});
    var mx = arr[arr.length - 1];
    
    for (var i = 0; i < arr.length - 1; i++) {
        var keys = Object.keys(mp);
        //console.log(keys, arr[i]);
        for (var j = 0; j < keys.length; j++) {
            var next = parseInt(keys[j]) + arr[i];
            if (next == mx) {
                return true;
            } else if(next < mx && next > (0 - (arr.length - i - 1) * mx)) {
                mp[next] = 1;
            }
        }
    }
    return false;         
}
console.log(ArrayAddition([1,2,3,3]));  
console.log(ArrayAddition([1,2,3,7]));