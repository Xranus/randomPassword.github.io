let result1El = document.getElementById('result1-el')
let result1E2 = document.getElementById('result2-el')
result1El.value = ""
result1E2.value = ""

const characters = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
    "7", "8", "9","~","`","!","@","#","$","%","^","&","*"
    ,"(",")","_","-","+","=","{","[","}","]",",","|",":",
    ";","<",">",".","?","/"];
function generatePassword() {
    result1El.value = ""
    result1E2.value = ""
    result1()
    result2()
    document.querySelector('.c1').style.display = "block"
    document.querySelector('.c2').style.display = "block"

}
function result1() {
    for (let i = 0; i < 16; i++) {
        result1El.value += characters[Math.floor(Math.random()*(characters.length-1))]
    }
}
function result2() {
    for (let i = 0; i < 16; i++) {
        result1E2.value += characters[Math.floor(Math.random()*(characters.length-1))]
    }
}
function copyText1() {
    // Get the text field
    var copyText = document.getElementById("result1-el");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
} 
function copyText2() {
    // Get the text field
    var copyText = document.getElementById("result2-el");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
} 