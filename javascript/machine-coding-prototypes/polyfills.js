const arr = [1, 2, 3, 4, 5, 6];

//  Error .forEach function does not exist on arr variable

// Real Signature ko samjho
//calls my fn for each value

if (!Array.prototype.myforEach) {
  Array.prototype.myforEach = function (userFn) {
    const originalarray = this;

    for (let i = 0; i < originalarray.length; i++) {
      userFn(originalarray[i], i);
    }
  };
}

// arr.myforEach(function (value, index) {
//   console.log(index, value);
// });

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const origarray = this;
    const newarray = [];

    for (let i = 0; i < origarray.length; i++) {
      const value = userFn(this[i], i);

      newarray.push(value);
    }

    return newarray;
  };
}

// const n2= arr.myMap((e , i)=>e*2)
// console.log(n2)

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i], i)) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

const array2 = arr.myFilter((e) => e % 3 == 0);
console.log(array2);
