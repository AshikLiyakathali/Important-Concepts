/* 1. The idea behind -
A) Kadane's Algo - Basically I have to look for all contiguous sub-arrays of size 4, and also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I check if the current sum is greater than the max_sum so far and updates it accordingly.
B) In the first loop is I am just generating the sum of the sub-array of the first 4 elements.
C) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. And after doing this, updaing the max_so_far to its highest value, by comparing it to its previous hightest value.
*/

function findMaxAverage(nums, k) {

	var curr_max = 0;
	for (var i = 0; i < k; i++) {
		curr_max += nums[i];
	}

	var max_so_far = curr_max;

	for (var j = k; j < nums.length; j++) {
		curr_max += (nums[j] - nums[j - k]);
		// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far    
		max_so_far = Math.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));


/*2. Solution with time complexity of O(n^3). Cubic Algorithm.
Idea: For all pairs of integers, i ≤ j, check whether the sum of A[i..j] is greater than the maximum sum so far.*/

function findMaxSubArrayBruteForce(arr) {
    var max_so_far = Number.NEGATIVE_INFINITY;
    var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += arr[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    return {
        left: leftIndex,
        right: rightIndex,
        final_max_sum_subArray: max_so_far
    };
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));


/*3. Solution with time complexity of O(n^2). Quadratic Algorithm.
Idea: The sum of A[i..j] can be efficiently calculated as (sum of A[i..j-1]) + A[j].*/

function findMaxSubArrayBruteForce(arr) {
	var max_so_far = Number.NEGATIVE_INFINITY;
	var leftIndex = 0,
		rightIndex = arr.length - 1,
		len = arr.length;

	for (var i = 0; i < len; i++) {
		maxSum = 0;

		for (var j = i; j < len; j++) {
			maxSum += arr[j];

			if (max_so_far < maxSum) {
				leftIndex = i;
				max_so_far = maxSum;
				rightIndex = j;
			}
		}
	}
	return {
		left: leftIndex,
		right: rightIndex,
		final_max_sum_subArray: max_so_far
	};
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));


// 

function crossSubarray(array, left, middle, right) {
    var leftSum = -Infinity;
    var rightSum = -Infinity;
    var sum = 0;
    // Include elements on left of mid
    for (var i = middle; i >= left; i--) {
      if (sum + array[i] >= leftSum) {
        leftSum = sum + array[i];
      }
      sum += array[i];
    }
    sum = 0;
    // Include elements on right of mid
    for (var i = middle + 1; i < right; i++) {
      if (sum + array[i] >= rightSum) {
        rightSum = sum + array[i];
      }
      sum += array[i];
    }
    return leftSum + rightSum;
  }

  function maxSubarrayPartitioner(array, left, right) {
    if (right - left <= 1) {
      return array[left];
    }
    var middle = Math.floor((left + right) / 2);
    var leftSum = maxSubarrayPartitioner(array, left, middle);
    var rightSum = maxSubarrayPartitioner(array, middle, right);
    var crossSum = crossSubarray(array, left, middle, right);
    return Math.max(crossSum, leftSum, rightSum);
  }
   
  function maxSubarraydivideAndConquer(array) {
    return maxSubarrayPartitioner(array, 0, array.length);
  }  

console.log(maxSubarraydivideAndConquer([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


//

var maxSequence = function(arr){

    var curr_max = 0, max_so_far = 0;
  
    for(var i = 0; i < arr.length; i++){  
      curr_max = Math.max(0, curr_max + arr[i]);
      max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
  }
  
  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6 : [4, -1, 2, 1]
  
  /* If the solution specifically requires, that if the list is made up of only negative numbers or an empty list is given, zero should be returned - then few more lines can be added to explicitly take care of that. */

  let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

var getMaxArrNumber = function (arr) {
	return Math.max.apply(null, arr);
}

var maxSequence = function(arr){
  if(arr.length === 0 ) return 0;
  if(allNegatives(arr)) return getMaxArrNumber(arr);
  if(allPositives(arr)) return sum(arr);

  var curr_max = 0, max_so_far = 0;

  for(var i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
}

console.log(maxSequence([-2, -18, -3, -4, -12, -2, -19, -5, -4])); // returns -2
console.log(maxSequence([])); // returns 0
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4])); // returns 23
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6








