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
  ...p3, // spread operator
};
