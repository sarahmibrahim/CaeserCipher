function caesarCipher() {
  let letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ];
  let outputString = "";
  
  
  let userString = document.getElementById("entermessage").value;
  let userKey = document.getElementById("userKey").value;
  
  
  let shift = Number(userKey);


  for (count = 0; count < userString.length; count++) {
    const character = userString[count];
    const letterIndex = letters.indexOf(character);
    const newIndex = (letterIndex + shift) % 26;
    const newCharacter = letters[newIndex];
    outputString = outputString + newCharacter;
  }

  document.getElementById("output").value = outputString;
}
function Cipher() {
    let letters = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];
   
    let userKey = document.getElementById("userKey").value;
    
  let shift = Number(userKey)*-1;
    let outputString = "";
  
    let userString = document.getElementById("entercoded").value;
  
    for (count = 0; count < userString.length; count++) {
      const character = userString[count];
      const letterIndex = letters.indexOf(character);
      const newIndex = (letterIndex + shift) % 26;
      const newCharacter = letters[newIndex];
      outputString = outputString + newCharacter;
    }
  
    document.getElementById("Decoded").value = outputString;
  }