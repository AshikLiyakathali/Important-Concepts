// My Palindrome program

function Palindrome(str) {
    var length = str.length;
    if(length % 2 === 0){
        console.log("The given string", str, "is not a plaindrome");
    }
    else{
    var mid = (length-1)/2;
    var count = 0;
    for(var i = 0; i < mid; i++) {
        if(str[i] === str[(length-1)-i]){
            count++;             
        }
    }
    if(count === mid){
        console.log("The given string", str, "is a plaindrome");
    }
    else{
        console.log("The given string", str, "is not a plaindrome");
    }
}
}
Palindrome("abcba");
Palindrome("abc");
Palindrome("abcdcba");
Palindrome("abcd");
Palindrome("abcdedcba");
Palindrome("abcdef");
Palindrome("racecar");

// checking if a string is plaindrome in one step

function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
}
console.log(checkPalindrom("abcba"));
console.log(checkPalindrom("abcd"));


// faster method

function isPalindrome(s,i) {
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}
console.log( isPalindrome('racecar'));
console.log( isPalindrome('raceca'));

// using loop (simpler version of mycode)

function fastestIsPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
}
console.log(fastestIsPalindrome("abcba"));
console.log(fastestIsPalindrome("abcd"));