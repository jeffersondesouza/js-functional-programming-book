const myText =
  "Rather, this 3 book will teach you how 2 to use functional programming design strategies w";

function toSequence(myString) {
  var words = [],
    count = 0;

  const text = myString.split(" ");

  for (i = 0; count < 4; i++) {
    if (!text[i].match(/[0-9]/)) {
      words = words.concat(text[i]);
      count++;
    }
  }
  return words;
}

const dontMatch = regex => text => !text.match(regex);

const toSequenceFn = myString =>
  myString
    .split(" ")
    .filter(dontMatch(/[0-9]/))
    .slice(0, 4);

console.log(toSequence(myText));
console.log(toSequenceFn(myText));
