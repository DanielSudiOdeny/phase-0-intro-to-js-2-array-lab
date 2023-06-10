const cats = ["Milo", "Otis", "Garfield"];

function beforeEach() {
  const cats = [];
  cats.push("Milo", "Otis", "Garfield");
}

function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const moreCats = [...cats, name];
  return moreCats;
}

function prependCat(name) {
  const moreCats = [name, ...cats];
  return moreCats;
}

function removeLastCat() {
  const newCatsArray = cats.slice(0, 2);
  return newCatsArray;
}

function removeFirstCat() {
  const newCatsArray = cats.slice(1);
  return newCatsArray;
}
