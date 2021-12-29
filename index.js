function palindrome(str) {

    str = str.toLowerCase();
    str = str.replace(",", "");
    str = str.replace(".", "");
    str = str.replace("_", "");
    str = str.replace("-", "");
    str = str.replace(":", "");
    str = str.replace(";", "");
    str = str.replace(" ", "");
    
    const a = str.split("");
    //console.log(a);

    const b = [...a].reverse().join("");
    //console.log(b);

    const c = [...a].join(" ");
    //console.log(c);

    var len = b.length;
    var mid = Math.floor(len/2);
    
    for(var i=0; i<= len; i++){
      if(b[i] === c[i]){
        return true;
      }
    
      return false;
    }
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


