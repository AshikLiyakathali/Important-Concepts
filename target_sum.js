// Solution 1
// The simplest way to solve this problem is by using two for loops. 
// Which will take time complexity of O(n2)

function sumByTwo(array, target_sum){
    var i, j;
    for(i=0; i<array.length; i++){
        for(j=i+1; j<array.length; j++){
            if(array[i]+array[j]==target_sum){
                //found, return
                return [array[i], array[j]];
            }
        }
    }
    return "No such pair found";
}
var result = sumByTwo([4,5,-12,-2,8,9], -14);
console.log(result);

// Solution 2
// In this solution, first, we will sort the given array. 
// Then take two variables left=0 and right=array.length-1.
// Time complexity is O(nLogn+n)=O(nLogn)

function sumByTwo(array, target_sum){
    array.sort(); //which will take O(nlogn)
    var left=0;
    var right=array.length-1;
    //while loop will take O(n)
    while(left<right){
        sum = array[left]+array[right];
        if(sum==target_sum){
            return [array[left], array[right]];
        }
        else if(sum>target_sum){
            right--;
        }
        else{
            left++;
        }
    }
    return "No such pair found";
}
var result = sumByTwo([4,5,12,-2,8,9], 7);
console.log(result);


// Solution 3
// It is the most efficient solution.
// Time complexity of O(n)
// Space complexity of O(n).

function sumByTwo(array, target_sum){
    var tempArray = []; // it will store elements of given 
    //array which are already accessed
    // will take O(n) space
    var i;
    // will take O(n) time complexity
    for(i=0; i<array.length; i++){
        var temp = target_sum-array[i];
        if(tempArray.includes(temp)){
            // means temp+array[i] = target_sum
            return [temp, array[i]];
        }
        else{
            //pushing array elements in tempArray
            tempArray.push(array[i]);
        }
    }
    return "No such pair found";
}
var result = sumByTwo([4,5,-12,-2,8,9], -3);
console.log(result);
