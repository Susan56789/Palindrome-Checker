function palindrome(str) {

    
  let reversedStr = [];

  let d = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
for (let i = d.length - 1; i >= 0; i--) {
 reversedStr.push(d[i]);
}

for (let j = 0; j < str.length; j++) {
 if (reversedStr[j] !== d[j]) {
   return false;
 }
}
return true;
 }
    
    console.log(palindrome("eye"));
    console.log(palindrome("almostomla"));
    console.log(palindrome("_eye"));
    console.log(palindrome("race car"));
    console.log(palindrome("not a palindrome"));
    console.log(palindrome("A man, a plan, a canal. Panama"));
    console.log(palindrome("never odd or even"));
    console.log(palindrome("nope"));
    console.log(palindrome("My age is 0, 0 si ega ym."));
    console.log(palindrome("1 eye for of 1 eye."));
    console.log(palindrome("0_0 (: /-\ :) 0-0"));
    console.log(palindrome("five|\_/|four"));


