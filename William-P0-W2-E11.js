var string = "";

function balikkata (string) {
  var jawaban ="";
  for (var i= string.length - 1; i>=0; i--){
  jawaban = jawaban+string[i];
}
return jawaban;
}

console.log(balikkata("Hello World and Coders"));
console.log(balikkata("John Doe"));
console.log(balikkata("I am a bookworm"));
console.log(balikkata("Coding is my hobby"));
console.log(balikkata("Super"));