const person = {
  firstName: "sid",
  lastName: "chaudhary",
  hobbies: ["coding", "gym"],
  isMarries: false,
  hadgf: false,
  getfullName: function () {
    return `${this.firstName}  `;
  },
};

console.log(person.getfullName());

//memory
let fname = "Hitesh";
let fname2 = fname;

console.log(fname);

fname2 = "piyush";

console.log(fname);

//In objects
// here we are copying address of the object

let p1 = {
  fname: "sidd",
};

let p2 = p1;
p2.fname = "ayush";

console.log(p2);
console.log(p1);

// here we are really copying the exact object but will store at diff memory location

let p3 = {
  fname: "sidd",
};

let p4 = {
  ...p3, // spread operator but it dont work in nested objects so it is shallow copy like copy upar upar se
};

// deep copy

let p5;

// Objects practice
const teas = {
  name: "Lemon tea",
  type: "Green",
  caffine: "low",
  hello: {
    name: "hi",
  },
};

//console.log(teas["type"])

teas.origin = "india";

teas.caffine = "medium";

delete teas.type;

//console.log(teas)

for (let key in teas) {
  //console.log( key +": "+ teas[key])
}

const teacopy = { ...teas }; // shallow copy
const tea2copy = teas; //  reference of object

//console.log("teacopy" , teacopy)

const another = Object.assign(teas);
another.hello.name = "sid";

//console.log(another)

// fun.js

Object.prototype.chai = function () {
  console.log("CHAI");
};

const tea = {
  name: " ice",
};

//tea.chai()

const myteas = ["lemon tea", "orange tea"];

//myteas.chai()
