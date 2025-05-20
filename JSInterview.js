"use strict";
// this is global scope

console.log(this); // global object in non-strict mode --- in browser, it is window object
// in strict mode, it is undefined

// this inside a function

function x() {
  console.log(this); // undefined in strict mode
}
x(); // undefined in strict mode

// this inside non-strict function
function y() {
  console.log(this); // global object in non-strict mode
}
y(); // global object in non-strict mode

// this keyword value depends on how the function is called

x(); // undefined in strict mode
window.x(); // global object in non-strict mode

// this inside the object's methods

const student = {
  name: "John",
  age: 20,
  getName: function () {
    console.log(this.name);
  },
};
student.getName(); // John
// here this refers to the student object / current object
// this inside a constructor function

const student2 = {
  name: "jaanu",
};

student.getName.call(student2); // jaanu
// here this refers to the student2 object

/* this inside arrow function ---> arrow function does not have its own this.
 The value of this is lexically bound, meaning it takes the value of this from the enclosing context where the arrow function is defined.*/

const obj = {
  name: "John",
  age: 20,
  getName: () => {
    console.log(this); // in non-strict mode, it is global object
  },
};

obj.getName(); // global object in non-strict mode

const obj2 = {
  name: "John",
  age: 20,
  getName: function () {
    const arrow = () => {
      console.log(this); // this refers to the obj2 object. Because arrow function does not have its own this, it takes the value of this from the enclosing context where the arrow function is defined.
    };
    arrow();
  },
};
obj2.getName(); // obj2 object

// this inside setTimeout
const obj3 = {
  name: "John",
  age: 20,
  getName: function () {
    setTimeout(function () {
      console.log(this); // global object in non-strict mode
    }, 1000);
  },
};
obj3.getName(); // global object in non-strict mode
// this inside setTimeout with arrow function
const obj4 = {
  name: "John",
  age: 20,
  getName: function () {
    setTimeout(() => {
      console.log(this); // obj4 object
    }, 1000);
  },
};

// this inside DOM event handler refers to the element that triggered the event
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this); // button object
});

// call- we can borrow the method of one object and use it on another object
const student3 = {
  name: "John",
  age: 20,
  getName: function () {
    console.log(this.name);
  },
};
const student4 = {
  name: "jaanu",
};
student3.getName.call(student4); // jaanu
// apply- we can borrow the method of one object and use it on another object
// First parameter is always be the reference to this value and second parameter is always be the  arguments to the function
const student5 = {
  name: "John",
  age: 20,
  getName: function (a, b) {
    console.log(this.name);
    console.log(a, b);
  },
};
const student6 = {
  name: "jaanu",
};
student5.getName.call(student6, 1, 2); // jaanu
student5.getName.apply(student6, [1, 2]); // jaanu

// bind- we can borrow the method of one object and use it on another object
// bind returns a new function with the specified this value and arguments

// currying - defining a function that takes multiple arguments and returns a function that takes the next argument
// and so on until all arguments are provided. This is useful for creating functions with partial application.

function add(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(10)); // 15

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // 10

/*All these methods are user for method/functions borrowing/sharing.
1. call method is used to call the function with the given this value and argument can be passed individually.
2. apply method is similar to call method, the only difference is that instead of passing argument individually, will pass the argument in a list/array.
3. bind method is similar to call method. It is also used to override this value, but the difference is it will not invoke the function instantly but return a function with attached this and argument which can be called later.
*/

function getAddress(village, pin) {
  console.log(this.state + " " + this.city + " " + village + " " + pin);
}

const address = {
  state: "AP",
  city: "Srikakulam",
};

getAddress.call(address, "Nsp", "532201");
getAddress.apply(address, ["nsp", "532201"]);

const bind = getAddress.bind(address);

bind("Nsp", "532201");

/* A polyfill is a piece of code that enables the usage of new programming language or web platform features in outdated browsers or environments that do not support them.
 We will look deeply into JavaScript polyfills in this blog article, discussing their advantages and how to use them in your code.*/

/* implement polyfill for bind */
function getAddress1(village, pin) {
  console.log(this.state + " " + this.city + " " + village + " " + pin);
}

Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const address1 = {
  state: "AP",
  city: "Srikakulam",
};

const bind1 = getAddress1.myBind(address1);
bind1("nsp", "532201");

/* debouncing*/

// Debouncing is a technique used to limit the rate at which a function is executed. It ensures that a function is not called too frequently, especially in response to events that can fire rapidly, such as scrolling, resizing, or typing in an input field.

// Delaying a function execution until a certain period of time has passed since the last time it was invoked. This is useful for optimizing performance and reducing the number of function calls.
const apiCall = () => {
  console.log("API call");
};
const debounce = function (func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const callDebounce = debounce(apiCall, 2000);
callDebounce(); // API call after 2 seconds

const deb2 = function (fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);

    setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/* closure */
const outer = () => {
  let count = 0;
  const inner = () => {
    count++;
    console.log("count", count);
  };
  return inner;
};

const data = outer();
data();
data();
