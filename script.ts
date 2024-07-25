//object types
// const obj: {
//   name: string;
//   age: number;
// } = {
//   name: "abhishek",
//   age: 43,
// };
// console.log("obj", obj);

//nested object type
// const obj: {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     state: string;
//   };
// } = {
//   name: "abhishek",
//   age: 43,
//   address: {
//     city: "Bhopal",
//     state: "Madhya Pradesh",
//   },
// };
// console.log("obj", obj);

//array
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "abhishek",
//   age: 43,
//   hobbies: ["sports", "cooking"],
// };
// for (const hobby of person.hobbies) {
//   console.log("hobbies", hobby.toUpperCase());
// }

//working with tuples
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "abhishek",
//   age: 43,
//   hobbies: ["sports", "cooking"],
//   role: [1, "author"],
// };
// console.log("person", person);
// for (const hobby of person.hobbies) {
//   console.log("hobbies", hobby.toUpperCase());
// }

//any
// let a: any = 34;
// console.log(a);
// a = "string";
// console.log(a);

//union type
// let b: number | string = 34;
// console.log(b);
// b = "hello";
// console.log(b);

//literal types
// let a: "hello" | "world";
// a = "hello";
// console.log(a);
// // a = "Abhi"; //error
// console.log(a);

//type aliaseas
// type Combinable = number | string;
// let a: Combinable = 34;
// let b: Combinable = "hello";

// console.log(a);

//type aliaseas with object
// type Person = {
//   name: string;
//   age: number;
// };
// const person: Person = {
//   name: "abhishek",
//   age: 43,
// };

//function return type
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
// const result = add(3, 4);
// console.log(result);

//function return type void
// function add(n1: number, n2: number): void {
//   console.log(n1 + n2);
// }
// add(3, 4);

// never type
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// generateError("An server error occured!", 500);

// class Department {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   printData() {
//     console.log("dept emp name - ", this.name);
//   }
// }

// const accoutingDept = new Department("Accounting");
// accoutingDept.printData();

// interface Person {
//   name: string;
//   age: number;
//   greet(message: string): void;
// }
// const person: Person = {
//   name: "abhishek",
//   age: 43,
//   greet(message: string) {
//     console.log(message + " " + this.name);
//   },
// };
// person.greet("Hello");

// access modifiers
// class Person {
//   private name: string;
//   public age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Emplyee extends Person {
//   private empId: number;
//   constructor(name: string, age: number, empId: number) {
//     super(name, age);
//     this.empId = empId;
//   }
// }

// class Student extends Person {
//   private rollNo: number;
//   constructor(name: string, age: number, rollNo: number) {
//     super(name, age);
//     this.rollNo = rollNo;
//   }
// }

// const emp = new Emplyee("Abhishek Sharma", 24, 1004);
// const std = new Student("Ranjan Sharma", 21, 1003);
// console.log({ emp });
// console.log({ std });

// // normal generic

// function greetUser<T>(arg: T): T {
//   return arg;
// }
// const res = greetUser("2");
// const res2 = greetUser(2);
// console.log(res);
// console.log(res2);

// array generic

// function arrayGen<T>(arg: T[]): T[] {
//   const res = arg.map((el) => {
//     return el;
//   });
//   return res;
// }
// const res = arrayGen(["hello", "123", 234, true]);
// // const res2 = arrayGen(true); //error
// console.log(res);

//generic array funciton

// const arrowGeneric = <T>(product: T[]): T[] => {
//   return product;
// };

// const res = arrowGeneric(["hello", "123", 234, true]);
// console.log("product", res);

// extend generic

// interface Product {
//   name: string;
//   age: number;
// }
// const genericExtend = <T, G extends Product>(arg1: T, arg2: G): object => {
//   return {
//     arg1,
//     ...arg2,
//   };
// };
// const res2 = genericExtend("hello", { name: "abhishek", age: 43 });
// console.log("res2", res2);

// keyof constraints
// const student = {
//   name: "abhishek",
//   age: 43,
//   address: "Bhopal",
// };
// function getData<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }
// const stdName = getData(student, "name");
// console.log("name", stdName);

// generic class
// class dataStorage<T> {
//   private data: T[] = [];
//   public setData = (item: T) => {
//     this.data.push(item);
//   };
//   public getData() {
//     return [...this.data];
//   }

//   public removeData(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }
// }
// const storageStr = new dataStorage<string>();
// const storageNum = new dataStorage<number>();
// storageStr.setData("hello");
// storageStr.setData("Abhishek");
// storageStr.setData("Sharma");
// console.log("get data", storageStr.getData());
// storageStr.removeData("Abhishek");
// console.log("get data", storageStr.getData());

//decorators
// function MyDecoratory(args: string) {
//   console.log("MyDecoratory factory");
//   return (constructor: Function) => {
//     console.log("Decorator called", args);
//   };
// }
// function MyDecoratory2(args: string) {
//   console.log("MyDecoratory2 factory");
//   return (constructor: Function) => {
//     console.log("Decorator 2 called", args);
//   };
// }
// @MyDecoratory("MyDecoratory")
// @MyDecoratory2("MyDecoratory2")
// class MyData {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const myData = new MyData("Abhishek", 43);
// console.log(myData);

// function myDeco(args: string) {
//   console.log("me deco", args);
// }

// function Log(
//   target: any,
//   propertyName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.log(`Calling ${propertyName} with arguments:`, args);
//     return originalMethod.apply(this, args);
//   };

//   return descriptor;
// }
// @myDeco("hello")
// class Calculator {
//   @Log
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }

// const calculator = new Calculator();
// console.log(calculator.add(2, 3));

interface ValidatorConfig {
  [property: string]: {
    [validatableProps: string]: string[];
  };
}

const registerValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: [
      ...(registerValidators[target.constructor.name]?.[propName] || []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registerValidators[target.constructor.name] = {
    ...registerValidators[target.constructor.name],
    [propName]: [
      ...(registerValidators[target.constructor.name]?.[propName] || []),
      "positive",
    ],
  };
}

function Validate(obj: any) {
  // Use 'any' to avoid type issues
  const objValidatorConfig = registerValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Book {
  @Required
  title: string;
  @PositiveNumber
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  display() {
    console.log(this.title, this._price);
  }
}

const formEl = document.querySelector("form")!;

formEl?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.querySelector("#title") as HTMLInputElement;
  const priceEl = document.querySelector("#price") as HTMLInputElement;

  const title = titleEl?.value;
  const price = +priceEl?.value;

  const courseBook = new Book(title, price);
  if (!Validate(courseBook)) {
    throw new Error("Invalid input");
  }
  console.log(courseBook);
});
