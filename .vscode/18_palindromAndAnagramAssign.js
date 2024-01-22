console.log(`============================== Step 1 ==============================`);

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
    if (rev == str) {
      return "The given String is Palindrome";
    }
    return "The given String is Not a Plindrome";
  }
  let str1 = isPalindrome("madam");
  console.log(`The String-"madam" :- ${str1}`);
  
  let str2 = isPalindrome("dad");
  console.log(`The String-"dad"   :- ${str2}`);
  
  let str3 = isPalindrome("hello");
  console.log(`The String-"hello" :- ${str3}`);