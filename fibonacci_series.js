// Fibonacci sequence in javascript

// It is the summation of the previous two digits
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// F(n) = F(n-1) + F(n-2)

function fibonacci(num){
    var a = 1;
    var b = 0;
    var temp;
    while(num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;    
}

console.log(fibonacci(4));
// Time complexity is O(n)

// Using array to generate series(my code)

function fibonacci1(num) {
    if (num <= 0) {
        return 1;
    }
    var arr = [];
    var a = 1;
    var b = 0;
    for(var i = 0; i < num; i++) {
        var temp = a;
        a = a + b;
        b = temp;
        arr[i] = b;
    }
console.log(arr);
}

fibonacci1(7);

// Recursive solution

function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Memoization

// It is an optimization technique used primarily to speed up computer programs
// by storing the results of expensive function calls.

function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
fibonacci(4,1)

// While loop
// Time complexity: O(N)
// Space complexity: Constant
// Function calls: 51
// Time needed: 0.000001ms

// Recursion

// Time complexity: O(2^N)
// Space complexity: O(n)
// Function calls: 20.365.011.074
// Time needed: 176.742ms

// Memoization

// Time complexity: O(2N)
// Space complexity: O(n)
// Function calls: 99
// Time needed: 0.000001ms