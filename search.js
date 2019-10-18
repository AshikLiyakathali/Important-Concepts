// 1. Linear Search in JavaScript

// values => array with all the values
// target => value to be found
// Time complexity of Linear search algorithm is O(n)

function linearSearch(values, target)
{
    var length = values.length;
    for(var i = 0; i < length; i++)
    {
        if (values[i] === target) 
        {       
            return i; 
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5], 3));
console.log(linearSearch([1,2,3,4,5], 5));
console.log(linearSearch([1,2,3,4,5], 8));


// 2. Binary Search in JavaScript

// values => given sorted array
// length => length of the array
// target => value to be searched
// Time Complexity of Binary Search O(log n)

function binarySearch(values, target){
    values = values.sort();
    console.log(values);
    var length = values.length;
    var max = (length - 1);
    var min = 0;  
    var step = 0;  // to find out in how many steps we completed the search
    
    for(var i=0; max >= min; i++){
        i = Math.floor((max + min) / 2);
        step = step + 1;
        if(target > values[length-1]){
            console.log("The given element is not present in the given array");
            break;
        }
        if(values[i] === target){
            console.log("The given element is present in the given array at index:", i);
            console.log("Number of steps required for search:", step);
            break;
        }
        else if(values[i] > target) {
            // target would be in the left half
            max = i;
            min = 0;
        }
        else if(values[i] < target) {
            // target would be in the right half
            min = i;
            max = length;
        }
    }
}
binarySearch([7,5,3,6,4,1,2], 5);
binarySearch([7,5,3,6,4,1,2], 1);
binarySearch([7,5,3,6,4,1,2], 7);
binarySearch([7,5,3,6,4,1,2], 9);
binarySearch([5,4,3,2,1], 1);
binarySearch([5,4,3,2,1], 5);
binarySearch([5,4,3,2,1], 3);
binarySearch([5,4,3,2,1], 8);


// Jump Search
// Time Complexity is O(√n).
// Space Complexity is O(1).

function jumpSearch(values, target){
    var a = values.sort();
    console.log(a);
    var length = values.length;
    var i = 0;
    var m = Math.floor(Math.sqrt(length)); //initializing block size= √(n)
    if(target > a[length-1]){
        return -1;
    }
    else if(target === a[length - 1]) {
        return length - 1;
    }
    while((a[m] <= target) && (m < length)) { 
       // the control will continue to jump the blocks 
       i = m;  // shift the block
       m = m + 1;
       if(m > (length - 1)){
         // if m exceeds the array size
         return -1; 
       }     
     }
    for(var x = i; x < m; x++) { //linear search in current block
       if(a[x] === target){
         return x; //position of element being searched 
       }
    }
    return -1;
 }
//console.log(jumpSearch([1,2,3,4,5,6,7,8,9],6))

function create(arr,n){
    for(var i = 0; i < n; i++) {
        arr[i] = i * 10;
     }
     return arr;
}
var arr = create([],9);
console.log(arr);
var result = jumpSearch(arr, 80);
if(result >= 0){
    console.log("Item found at location:", result );
}
else{
    console.log("Item is not found in the list");
}