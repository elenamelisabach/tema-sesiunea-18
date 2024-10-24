var sentence =
  "String-urile sunt folosite pentru a stoca și manipula text în JavaScript.";
var firstSentenceElement = sentence[0];
console.log("The first element is:", firstSentenceElement);
console.log("The length of this sentence is:", sentence.length);

//Substring

var substring = sentence.substring(5, 20);
console.log("The substring is: ", substring);

// let & const & var
let firstNumber = 7;
var secondNuber = 70;
const someNumber = 150;

console.log("First number: ", firstNumber);

if (firstNumber === 7) {
  var thirdNumber = 20;
  let thirdofNumber = 80;
  console.log("Third number with let is: ", thirdofNumber);
}

console.log("Third number is:", thirdNumber);

if (true) {
  let a = 5;
  const b = 10;

  console.log(a);
  console.log(b);
}

//Functie ca parametru

const car = {
  marca: "Audi",
  model: " A5",
  an: 2020,
  pret: 20000, //€
};

const marca = car.marca;
const model = car.model;
const an = car.an;
const pret = car.pret;

console.log(
  `Mașina este un ${marca} ${model} din ${an}, cu prețul de ${pret} EUR.`
);

const temperaturi = [18, 22, 20, 21];

function calculeazaMediaTemperaturi(temperaturi) {
  if (temperaturi.length === 0) {
    return "Nu are temperaturi!";
  } else {
    const sum = temperaturi.reduce((acc, number) => acc + number, 0);
    return sum / temperaturi.length;
  }
}
console.log(calculeazaMediaTemperaturi([]));

console.log("Media aritmetica ests:", calculeazaMediaTemperaturi(temperaturi));
