// Name: Hunter Monaghan
// caesarCipher.js
//
// Purpose: <Brief, one or two sentence description of the
// problem that this program solves, in your own words.>
//
// Certification of Authenticity:
// <include one of the following>
// I certify that this program is entirely my own work.
// I certify that this program is my own work, but I
// discussed it with: <Name(s)>
//
// Input: a decoded word or letter
// Output: encoded mesage 


/* 
PsuedoCode:

1)Start at the first character in the string.
2)Is this character the letter A-Z
3)If step 2 was Yes, continue to step 4 below. If not, do not convert the letter and go back to step 2.
4)Convert the current letter to the letter 2 characters beyond current letter.
5)Last character in string? If not, go back to step 2.
6)return converted string
*/

var alphabet = []; 

function caesarCipher(){
  alphabet = "ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //alphabet = (/[A-Z]/)    
    
    var a = document.getElementById("key").value;
    var e = document.getElementById("myText").value;



    var key = Number(f)

    console.log(myText);
    console.log(f);
    console.log(key);

    var result='';

    for (var i = 0, len = myText.length; i < len; i++) {
      if (x[i] == x[i].toUpperCase()){
        var a = x[i].charCodeAt(0);
        var e = (((a - 65 + key) % 26) + 97);
        result += String.fromCharCode(e).toUpperCase();
      }
      else if (x[i] == x[i].toLowerCase()){
        var a = x[i].charCodeAt(0);
        var e = (((a - 97 + key) % 26) + 97);
        result += String.fromCharCode(e);
      }
      else {
        result += x[i];
      }
    }
    document.getElementById("myText").value = result;
    //document.getElementById("key").value = result;
  }